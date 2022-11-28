import createApiClient from "./api.service";

class AccountService {
    constructor(baseUrl = "/api/Account") {
        this.api = createApiClient(baseUrl);
    }
    async Login(data) {
        return (await this.api.post("/Login",data)).data;
    }
    async Register(data) {
        return (await this.api.post("/Register", data)).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async updateUser(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new AccountService();