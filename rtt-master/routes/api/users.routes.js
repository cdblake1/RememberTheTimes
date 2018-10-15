const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const Users = mongoose.model('Users');
const userService = require('../../services/users.service');
const auth = require('../../services/auth.service');

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, userService.register);

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, userService.login);

router.get('/logout', auth.optional, userService.logout);

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, userService.readData);


router.post('/:prop', auth.required, (req, res, next) => {
    const { params: { prop } } = req;
    const { body: { email, value } } = req;

    Users.findOneAndUpdate({ email: email }, { $set: { prop: value } })
        .then(() => {
            return res.send('Updated User email to ' + email);
        });
});

module.exports = router;