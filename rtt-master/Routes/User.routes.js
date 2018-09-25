const express = require('express');
const router = express.Router();

const userController = require('../Controllers/User.Controller');

router.get('/test', userController.test);
router.post('/create', userController.create);
router.post('/:firstName/update', userController.update);
router.get('/:firstName', userController.userInfo);

module.exports = router;
