const router = require('express').Router();
const newUser = require('../controllers/registration.controller');
const loggin = require('../controllers/loggin.controller');
router.post('/');
router.post('/user', function(req, res){
    users.createUser
});
module.exports = router;
router.post('/newUser', newUser.insertUser);
router.get('/loggin', loggin.getUser);