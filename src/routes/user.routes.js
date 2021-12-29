const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers, getMyProfile } = require('../controller/user.controller');
const requireJwt = require('../middleware/requireJwt');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/getusers', getUsers);

router.get('/me', requireJwt, getMyProfile)

module.exports = router;
