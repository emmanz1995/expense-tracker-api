const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controller/userCtrl');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/getusers', getUsers);

module.exports = router;
