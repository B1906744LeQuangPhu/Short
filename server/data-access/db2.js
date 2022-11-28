 const { MongoClient } = require("mongodb");
//uri: process.env.MONGODB_URI || "mongodb+srv://@localhost/UrlShortener"
// const uri = "mongodb+srv://@localhost/UrlShortener"
class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        
        return this.client;
    };
}
module.exports = MongoDB;


// MongoClient.connect("mongodb://localhost:27017/UrlShortener1234", function (err, db) {
   
//      if(err) throw err;

//      class MongoDB {
//             static connect = async (uri) => {
//                 if (this.client) return this.client;
//                 this.client = await MongoClient.connect(uri);
//                 return this.client;
//             };
//         }
        
//         module.exports = MongoDB;        
// });



// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri =
//   "mongodb+srv://localhost/UrlShortener/?maxPoolSize=20&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
