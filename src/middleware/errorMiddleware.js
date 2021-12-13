const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err?.message,
        stack: process.env.Node_ENV !== 'production' ? null: err?.stack,
    });
}

module.exports = { errorHandler };
