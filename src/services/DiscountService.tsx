import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class DiscountService {

    list() {
        return axiosInstance.get("/v1/descontos");
    }

    findById(id: number) {
        return axiosInstance.get("/v1/descontos/" + id);
    }

    update(id: number, data: object) {
        return axiosInstance.post("/v1/descontos/" + id, data);
    }

}