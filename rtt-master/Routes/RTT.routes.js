const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/create', userController.create);
router.get('/:firstName', userController.userInfo);

module.exports = router;
