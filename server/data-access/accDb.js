const Acc = require("../models/user");

const save = (username, pass) => {
    Acc.create({ username,pass})
};

const find = (username) => Acc.findOne({ username: username });

module.exports = {
    save,
    find
}; 
