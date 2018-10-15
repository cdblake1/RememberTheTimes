const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./auth.service');
const Users = mongoose.model('Users');


const register = (req, res, next) => {
    const userData = req.body.user;

    console.log(userData);
    if (!userData.email) {
        return res.status(422).json({
            email: 'isRequired'
        });
    }

    if (!userData.password) {
        return res.status(422).json({
            password: 'isRequired'
        })
    }

    const user = new Users(userData);

    user.setPassword(userData.password);

    return user.save()
        .then(() => {
            res.json({ user: user.toAuthJSON() })
        });
}

const login = (req, res, next) => {
    console.log(req.user);
    const { body: { user } } = req;
    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required'
            }
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required'
            }
        });
    }

    return passport.authenticate('local', (err, passportUser, info) => {
        if (err) {
            return next(err);
        }
        console.log(passportUser);
        if (passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({ user: user.toAuthJSON() });
        }

        return res.status(400).info;
    })(req, res, next);
}

const readData = (req, res, next) => {
    const { payload: { id } } = req;

    Users.findById(id)
        .then((user) => {
            if (!user) {
                return res.sendStatus(400);
            }
            console.log(req.session.token);
            return res.json({ user });
        });
}

const logout = (req, res, next) => {
    req.session.token = null;

    res.send('User Logged Out, here is token ' + req.session.token);
}

const getUserDataById = (req, res, next) => { }

const getCurrentUserName = (req, res, next) => {
    console.log(req.body.username);
}

const updateData = (req, res, next) => {

}


module.exports = {
    register: register,
    login: login,
    readData: readData,
    logout: logout
}
