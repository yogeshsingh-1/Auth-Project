const express = require('express');
const router = express.Router({mergeParams : true});
const {createUser} = require('../controllers/userController')

router.post('/signup',createUser)

module.exports = router;