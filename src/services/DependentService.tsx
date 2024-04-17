import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class DependentService {

    list() {
        return axiosInstance.get("/v1/dependentes");
    }

    findById(id: number) {
        return axiosInstance.get("/v1/dependentes/" + id);
    }

    update(id: number, data: object) {
        return axiosInstance.post("/v1/dependentes/" + id, data);
    }

}