const express = require('express');
const router = express.Router();
const newUser = require('../controllers/registration.controller');
const login = require('../controllers/login.controller');
const updateUser = require('../controllers/updateUser.controller');
// const getInfo = require('../controllers/userInfo.controller')
router.post('/register', function(req, res) {
     newUser.insert(req, res);
});
router.post('/newUser', newUser.insertUser);


router.post('/login', login.getUser);
router.post('/update', updateUser.updateUser);
// router.get('/dashboard', getInfo.getInfoUser);
module.exports = router;