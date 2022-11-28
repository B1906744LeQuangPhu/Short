'use strict';

const { ObjectId } = require("mongodb");


class UserService {
    constructor(client) {
        this.User = client.db("UrlShortener").collection("users");

        // create unipue index for username, can not create 2 user same username
        this.User.createIndex ( { "username": 1 }, { unique: true } ) 
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractUserData(payload) {
        const user = {
            username: payload.username, 
            pass: payload.pass, // skip password hash
            
        };
        // remove undefined fields
        Object.keys(user).forEach(
            (key) => user[key] === undefined && delete user[key]
        );
        return user;
    }

    async register(payload) {
        const user = this.extractUserData(payload);
        const result = await this.User.findOneAndUpdate(
            user,
            { $set: { } },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }
    async find(filter) {
        const cursor = await this.User.find(filter);
        return await cursor.toArray();
    }
    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" },
        });
    }

    async authenticate({ username, pass }) {
        const user = await this.User.findOne({ username });
        // if (user && bcrypt.compareSync(password, user.hash)) {
        //     const token = jwt.sign({ sub: user.id }, config.app.secret, { expiresIn: '7d' });
        //     return {
        //         ...user.toJSON(),
        //         token
        //     };
        // }
        if(user) {
            if(user.username == username && user.pass == pass)
                {
                    // Thong bao
                    console.log("Login complete. Welcome " + user.username)
                    return user
                }
        } else {
            console.log("username or password not match");

        }

    }

    async getTodolistByUser() {

    }
}
module.exports = UserService;