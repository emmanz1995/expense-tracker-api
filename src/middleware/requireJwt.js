const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const { SECRET_KEY } = require('../config/keys');

const requireJwt = expressAsyncHandler( async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')) {
        token = req?.headers?.authorization?.split(" ")[1];
        console.log('Token:', token)
        try {
            if(token) {
                const decodedUser = jwt.verify(token, SECRET_KEY);
                // find the logged in user
                const user = await User.findById(decodedUser?.id).select("-password");

                req.user = user;
                next()
            }
        } catch(error) {
            throw new Error("Not Authorized!");
        }
    } else {
        throw new Error('No token found for the header!');
    }
})

module.exports = requireJwt;
