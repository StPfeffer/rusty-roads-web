import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class BenefitService {

    list() {
        return axiosInstance.get("/v1/beneficios")
    }

    findById(id: number) {
        return axiosInstance.get("/v1/beneficios/" + id);
    }

    update(id: number, data: object) {
        return axiosInstance.post("/v1/beneficios/" + id, data);
    }
}