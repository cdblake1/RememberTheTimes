const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./auth.service');
const Users = mongoose.model('Users');


const login = (req, res, next) => {
    const userProps = { body } = req;

    if (!userProps.email) {
        return res.status(422).json({
            email: 'isRequired'
        });
    }

    if (!userProps.password) {
        return res.status(422).json({
            password: 'isRequired'
        })
    }

    const user = new Users(user);

    user.setPassword(userProps.password);

    return finalUser.save()
        .then(() => res.json({ user: finalUser.toAuthJSON() }));


}

const register = (req, res, next) => { }

const getUserData = (req, res, next) => { }

const getUserDataById = (req, res, next) => { }
