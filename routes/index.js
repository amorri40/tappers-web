var express = require('express');
var router = express.Router();



var bodyParser = require('body-parser')
router.use(bodyParser.json());



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tappers');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

var UserSchemaData = mongoose.model('users', usersSchema);

var loggedin = false;

router.get('/', function(req, res) {
    if (!loggedin) {
        res.render('login', { title: 'Login' });
    } else {
        console.log('tappers man!');
        res.render('tappers', { title: 'Tappers' });
    }
});

router.get('/api/forgot/password/:username', function(req, res) {
    console.log("requested password change: " + req.params.username);

    res.send('password change successful, please check your email');
});

router.get('/app', function(req, res) {
    res.render('tappers', { title: 'Tappers' });
});

var apiRegisterResponse;

router.post('/login', function(req, res) {
    UserSchemaData.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, user) {
        if (user === null || user === undefined) {
            res.status(418).send('username or password is incorrect');
        } else {
            loggedin = true;
            res.redirect('/app');
        }
    });
});



router.post('/api/register', function(req, res) {
    UserSchemaData.findOne({
        username: req.body.username
    }, function(err, user) {
        if (user === null || user === undefined) {
            UserSchemaData.findOne({
                email: req.body.email
            }, function(err, user) {
                if (user === null || user === undefined) {
                    var userInput = {
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password
                    };
                    var data = new UserSchemaData(userInput);
                    data.save();
                    res.status(200).send('registered user successfully');
                } else {
                    res.status(418).send('email has been found');
                }
            });
        } else {
            res.status(418).send('username has been found');
        }
    });
});

var usernameExists = function(user) {
    mongoose.model('users').findOne({
        username: user
    }, function(err, user) {
        return user;
    });
}


// userCollection.insert({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password
// });
// res.status(status).send(message);


router.get('/reset/password/*', function(req, res) {
    console.log('reset password ');
});


module.exports = router;