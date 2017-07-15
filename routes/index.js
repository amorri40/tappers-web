var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/api/forgot/password/:username?', function(req, res, next) {
    //res.render('login', { title: 'Login' });

    //TODO: This
    console.log("requested password change: " + req.params.username);

    res.send('password change successful, please check your email');
});

router.get('/reset/password/*', function(req, res, next) {
    //Implement forgot password here
    console.log('reset password ');
});


module.exports = router;