import createApiClient from "./api.service";
class ShortenerService {
    constructor(baseUrl = "/api/linklist") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/test")).data;
    }
    
}
export default new ShortenerService();