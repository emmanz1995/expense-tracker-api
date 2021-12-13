const User = require('../model/User');
const expressAsyncHandler = require('express-async-handler');

const registerUser = expressAsyncHandler(async (req, res) => {
    const { firstname, surname, email, username, password, dob } = req?.body;
    const registeredUser = await User.findOne({ email })
    if (registeredUser) throw new Error('User already registered!')
    try {
        const user = await User.create({ firstname, surname, email, username, password, dob });
        res.status(200).json(user);
    } catch (e) {
        res.json(e);
    }
})

const loginUser = () => {}

const getUsers = () => {}

module.exports = {
    registerUser,
    loginUser,
    getUsers
};
