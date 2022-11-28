const urltmp= require ('./models/Url');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.port;
const host = process.env.host;
const bodyParser = require("body-parser"); //use to parse incoming request bodies
const acc = require("./controllers/acc.controller");
const Router = require("./routers/acc.router");
const ApiError = require("./controllers/api-error");


const urlServices = require("./services/urlServices");
const db = require("./data-access/db");
const urlDb = require("./data-access/urlDb");
//const user = require("./models/user.js");
const { async } = require('validate.js');
const corsOptions = {
  origin: 'http://localhost:8080',
  origin: 'http://127.0.0.1:8080',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.listen(port, () => console.log("listening port " + port)); 



const accountRouter = require("./routers/acc.router");
app.use("/api/Account", accountRouter);

const config = require("./config/index");
const MongoDB = require("./data-access/db2");




app.post("/test", (req, res)=>{
  
  urltmp.find({phone: req.body.phone})
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err)
    
  })
})

app.post("/url", async (req, res) => {
  try {
      if (!!urlServices.validateUrl(req.body.url))
        return res.status(400).send({ 
          msg: "Invalid URL." ,
          mess: req.body.url,
        });
      
      const urlKey = urlServices.generateUrlKey();
      const shortUrl = `http://${host}:${port}/${urlKey}`
      
      await urlDb.save(req.body.url,shortUrl,urlKey)
      console.log(acc.checkLogin);
      return res.status(200).send({ shortUrl });

  } catch (error) {
      return res.status(500).send({ msg: "Something went wrong. Please try again." });
  }
}); 

app.get("/:shortUrlId", async (req, res) => {
  try {
      const url = await urlDb.find(req.params.shortUrlId);
      return !url ? res.status(404).send("Not found") : res.redirect(301, url.longURL)

  } catch (error) {
      return res.status(500).send("Something went wrong. Please try again.")
  }
}); 





app.use((req, res, next) => {
  // Code ở đây sẽ chạy khi không có route được định nghĩa nào
  // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
  return next(new ApiError(404, "Resource not found"));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((error, req, res, next) => {
  // Middleware xử lý lỗi tập trung.
  // Trong các đoạn code xử lý ở các route, gọi next(error)
  // sẽ chuyển về middleware xử lý lỗi này
  return res.status(error.statusCode || 500).json({
      message: error.message || "Internal Server Error",
  });
});
async function startServer() {
  try {
      await MongoDB.connect(config.db.uri); // get uri
      console.log("Connected to the database!"); // notice connected

      
  } catch (error) {
      console.log("Cannot connect to the database!", error);
      process.exit();
  }
}
startServer();
module.exports = app;