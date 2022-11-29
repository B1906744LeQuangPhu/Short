const Url = require("../models/Url");

const save = (longURL, shortURL, shortUrlId,phone) => {
    Url.create({ longURL, shortURL, shortUrlId,phone })
};

const find = (shortUrlId) => Url.findOne({ shortUrlId: shortUrlId });

module.exports = {
    save,
    find
}; 
