const User = require('../model/user.model');
const expressAsyncHandler = require('express-async-handler');
const generateJwt = require('../middleware/generateJwt');

const registerUser = expressAsyncHandler(async (req, res) => {
    const { firstname, surname, email, username, password, dob } = req?.body;
    const registeredUser = await User.findOne({ email })
    if (registeredUser) throw new Error('User already registered!')
    try {
        const user = await User.create({ firstname, surname, email, username, password, dob });
        res?.status(200).json(user);
    } catch (e) {
        res?.json(e);
    }
})

const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req?.body;
    const userFound = await User.findOne({ email });
    if(userFound && (await userFound?.isPasswordMatch(password))) {
        res?.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            surname: userFound?.surname,
            email: userFound?.email,
            isAdmin: userFound?.isAdmin,
            token: generateJwt(userFound?._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid login credentials!');
    }
    // try {
    // } catch(e) {}
})

const getUsers = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res?.json(users);

    } catch(e) {
        res?.json(e);
    }
})

const getMyProfile = expressAsyncHandler(async (req, res) => {
   const { _id } = req?.user;
   try {
       const me = await User.findById(_id).select('-password -__v').populate(['expense', 'income'])
       res?.json(me)
   } catch(error) {
       res?.json(error);
   }
})

module.exports = {
    registerUser,
    loginUser,
    getUsers,
    getMyProfile
};
