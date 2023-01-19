const router = require('express').Router();
const users = require('../controllers/users.controller');
router.post('/');
router.post('/user', function(req, res){
    users.createUser
});
module.exports = router;
router.post('/newUser', users.insertUser);