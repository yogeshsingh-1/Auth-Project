const express = require('express');
const router = express.Router({mergeParams : true});
const {createUser, checkUser} = require('../controllers/userController');
const authenticationToken = require('../middleware/authMiddleware');

router.post('/signup',createUser);
router.post('/signin',checkUser);

// Apply authentication middleware to all routes after this point
router.use(authenticationToken);

// All routes after this line will be protected
router.get('/profile', (req, res) => {
  res.json({ message: "Protected user profile", user: req.user });
});

module.exports = router;