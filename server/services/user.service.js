// 'use strict';

class AccountService {
    constructor(client) {
        this.Account = client.db().collection("account");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
    extractAccountData(payload) {
        const account = {
            name: payload.name,
            phone: payload.phone,
            password: payload.password
        };
        // remove undefined fields.
        Object.keys(account).forEach(
            (key) => account[key] === undefined && delete account[key]
        );
        return account;
    }

    async create(payload) {
        const account = this.extractAccountData(payload);
        
        const phone = await this.Account.findOne({phone:payload.phone});
        if(phone===null){
            const result = await this.Account.findOneAndUpdate(
                account,
                { $set: account },
                { returnDocument: "after", upsert: true }
            );
            return result.value;
        }
    }
    async check(filter){
        const cursor = await this.Account.findOne(filter);
        // if(cursor===undefined){
        //     return false
        // }
        return await cursor;
    }
    // async find(filter){
    //     const cursor = await this.Account.findOne(filter);
    //     return await cursor;
    // }

//     async findByName(name){
//         return await this.find({name: {$regex: new RegExp(name), $options: "i"},});
//     }

//     async findById(id){
//         return await this.Account.findOne({
//             _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
//         });
//     }

    async update(id,payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractAccountData(payload);
        const result = await this.Account.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
        }
        async delete(id) {
            const result = await this.Account.findOneAndDelete({
                _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
            });
            return result.value;
        }

//         async deleteAll() {
//             const result = await this.Account.deleteMany({});
//             return result.deletedCount;
//         }
}

module.exports = AccountService;