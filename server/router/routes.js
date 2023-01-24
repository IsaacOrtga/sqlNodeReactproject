const router = require('express').Router();
const newUser = require('../controllers/registration.controller');
const login = require('../controllers/login.controller');
router.post('/');
router.post('/user', function(req, res){
    users.createUser
});
module.exports = router;
router.post('/newUser', newUser.insertUser);
router.post('/login', login.getUser);