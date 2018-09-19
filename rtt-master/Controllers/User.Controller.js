const User = require('../Models/User.model');
const mongoose = require('mongoose');




exports.test = function(req, res){
    res.send('Test Controller');
}

exports.create = function(req, res){
    console.log(req.body);
    let user = new User({
        firstName: req.body["First Name"],
        lastName: req.body["Last Name"],
        Email: req.body.email,
        Password: req.body.password,
        Age: req.body.age,
        Sex: req.body.sex,
        Address: req.body.address,
        City: req.body.city,
        State: req.body.state,
        ZipCode: req.body["Zip Code"]
    })
    console.log(user);

    user.save(function(err){
        if(err) console.log(err);
        mongoose.connect("mongodb://localhost:27017/app_db", function(err, db){
            if(err) throw err;
            db.collection('USERS').insertOne(user, function(err, r){
                if(err)throw err;
                res.send(`${user.firstName} inserted into DB`);
                db.close();
            });
        });
    })
}

exports.userInfo = function(req, res) {
    mongoose.connect("mongodb://localhost:27017/app_db", function(err, db){
        if(err) throw err;
        db.collection('USERS').findOne({firstName: req.params.firstName}, function(err, result){
            if(err) throw err;
            res.send(result);
            db.close();
        })
    })
}