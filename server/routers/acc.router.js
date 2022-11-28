
const express = require('express');
const account = require('../controllers/acc.controller');

const router = express.Router();
//Account
router.route('/Register').post(account.create);
router.route('/Login').post(account.checkLogin);
router.route('/:id').put(account.update).delete(account.delete)
// router.route('/:id').get(account.findOne).put(account.update).delete(account.delete);

module.exports=router;