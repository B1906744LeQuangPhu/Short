'use strict';

// exports
//const user = require("../models/user.js");
//const UserService = require("../services/user.service");
const MongoDB = require("../data-access/db2");
const ApiError = require("./api-error");
//const store = require('amplify-store');


const AccountService = require("../services/user.service");

//Account
exports.create = async (req, res, next) =>{
    if(!req.body?.name){
        return next(new ApiError(400, "Name can not be empty"));
    }

    try{
        const accountService = new AccountService(MongoDB.client);
        const document = await accountService.create(req.body);
        if(document=== undefined){
            // return next(new ApiError(400, "phone registered!"));
            return res.send(false);
        }
        return res.send(true);
    }
    catch(error){
        return next(
            new ApiError(500, "An error occurred while creating the account")
        );
    }
};
exports.checkLogin = async(req, res, next) => {
    try{
        const accountService = new AccountService(MongoDB.client);
        const document = await accountService.check(req.body);
        // if(document=== undefined){
        //     return res.send("Successful")
        // }
        return res.send(document);
    }
    catch(error){
        return next(
            new ApiError(500, "Err name or password incorrect")
        );
    }
};
exports.update = async(req, res, next) => {
    try{
        const accountService = new AccountService(MongoDB.client);
        const document = await accountService.update(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "Account not found"));
        }
        return res.send({ message: "Account was updated successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating account with id=${req.params.id}`)
        );
    }
};

exports.delete= async (req, res, next) => {
    try {
        const accountService = new AccountService(MongoDB.client);
        const document = await accountService.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Account not found"));
        }
        return res.send({ message: "Account was deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Could not delete account with id=${req.params.id}`)
        );
    }
};

// exports.findAll = async (req, res, next) =>{
//     let documents = []

//     try{
//         const accountService = new AccountService(MongoDB.client);
//         const {name} = req.query;
//         if (name){
//             documents = await accountService.findByName(name);
//         }
//         else{
//             documents = await accountService.find({})
//         }
//     }
//     catch(error){
//         return next(
//             new ApiError(500, "An error occurred while creating the contact")
//         );
//     }
//     return res.send(documents);
// }

// exports.findOne= async (req, res, next) =>{
//     try{
//         const accountService = new AccountService(MongoDB.client);
//         const document = await accountService.findById(req.params.id);
//         if (!document){
//             return next(new ApiError(404, "Account not found"));
//         }
//         return res.send(document);
//     }
//     catch(error){
//         return next(
//             new ApiError(500, `Error retrieving account with id=${req.parmas.id}`)
//         );
//     }
// }

// exports.update = async (req, res, next) => {
//     if (Object.keys(req.body).length === 0) {
//         return next(new ApiError(400, "Data to update can not be empty"));
//     }

//     try {
//         const accountService = new AccountService(MongoDB.client);
//         const document = await accountService.update(req.params.id, req.body);
//         if (!document) {
//             return next(new ApiError(404, "Account not found"));
//         }
//         return res.send({ message: "Account was updated successfully" });
//     } catch (error) {
//         return next(
//             new ApiError(500, `Error updating account with id=${req.params.id}`)
//         );
//     }
// };



// exports.deleteAll=async (req, res, next) => {
//     try {
//         const accountService = new AccountService(MongoDB.client);
//         const deletedCount = await accountService.deleteAll();
//         return res.send({
//             message: `${deletedCount} account were deleted successfully`
//         });
//     } catch (error) {
//         return next(
//             new ApiError(500, "An error occurred while removing all contacts")
//         );
//     }
// };



// var express = require('express')
// var bodyParser = require('body-parser')
 
// var app = express()
 
// // create application/json parser
// var jsonParser = bodyParser.json()
 
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// // POST /login gets urlencoded bodies
// // app.post('/sigup', urlencodedParser, function (req, res) {
// //   res.send('welcome, ' + req.body.username)
// // })
 
// // POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//   // create user in req.body
// })




// // create and save a new user ~ register
// exports.register = async (req, res, next) => {
//     // if (!req.body?.username || !req.body?.pass) {
        
//     //     return next(new ApiError(400, "username or password can not be empty"));
//     // }
//     // try {
//     //     const userService = new UserService(MongoDB.client);
//     //     const document = await userService.register(req.body);
//     //     return res.send(document);
//     // } catch (error) {
//     //     return next(
//     //         new ApiError(500, "An error occurred while creating the user")
//     //     );
//     // }


  
//        console.log(req.body)
  
    



// };

// // Retrieve all users of a user from the database
// exports.AllUserShow = async (req, res, next) => {
//     let documents = [];
    
//     try {
//         const userService = new UserService(MongoDB.client);
//         const { name } = req.query;
//         if (name) {
//             documents = await userService.findByName(name);
//         } else {
//             documents = await userService.find({});
//         }
//     } catch (error) {
//         return next(
//             new ApiError(500, "An error occurred while retrieving users")
//         );
//     }
    
//     return res.send(documents);
// };

// exports.authenticate = async (req, res, next) => {
//     const userService = new UserService(MongoDB.client);
//     const document = await userService.authenticate(req.body)
//         // .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         // .catch(err => next(err));
//     if(document) {
//         store( "username", document.username );
//         return res.send(document);
//     }
//     else
//         return res.send("username or password not match");
// }

// exports.logout = async (req, res, next) => {
//     if(store( "username" )) {
//         // store.storageType("username", store( "username" ));
//         console.log("Logout account " + store("username") + " completed")
//         let temp = store("username")
//         store("username", null)
//         return res.send("Logout account " + temp + " completed")
//     } else return res.send("Logout fail");

// }