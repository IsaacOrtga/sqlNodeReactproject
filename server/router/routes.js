const express = require('express');
const router = express.Router();
const newUser = require('../controllers/registration.controller');
const login = require('../controllers/login.controller');
const updateUser = require('../controllers/updateUser.controller');
const getInfo = require('../controllers/userInfo.controller')



router.post('/register', newUser.insertUser);
router.post('/login', login.getUser);
router.put('/updateD/:alias', updateUser.updateDescription);
router.put('/updateI/:alias', updateUser.updateInterests);
router.get('/getUserInfo', getInfo.getUserData);
module.exports = router;