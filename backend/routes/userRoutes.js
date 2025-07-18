const express = require('express');
const { createUser } = require('../services/userService');
const router = express.Router({mergeParams : true});

router.post('/signup',createUser)

module.exports = router