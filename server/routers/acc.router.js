const express = require("express");
const acc= require("../controllers/acc.controller.js");


const router = express.Router();
// router.route("/login")
//     .post(acc.login)
// router.route("/signup")
//     .post(acc.create)

    




router.route('/login')
    .post(acc.authenticate);
router.route('/logout')
    .get(acc.logout);

router.route('/signup')
    .post(acc.register);

module.exports = router;