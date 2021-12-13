const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/userCtrl');

router.post('/api/user/register', registerUser);

module.exports = router;
