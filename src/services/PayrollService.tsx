import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class CollaboratorService {

    list() {
        return axiosInstance.get("/v1/folhaspagamento");
    }

    findById(id: number) {
        return axiosInstance.get("/v1/folhaspagamento/" + id);
    }

    update(id: number, data: object) {
        return axiosInstance.post("/v1/folhaspagamento/" + id, data);
    }

}