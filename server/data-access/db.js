const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/UrlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log ("url ok")
mongoose.set('useCreateIndex', true)

