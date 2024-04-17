import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class PayrollService {

    list() {
        return axiosInstance.get("/v1/folhaspagamento");
    }

    findById(id: number) {
        return axiosInstance.get("/v1/folhaspagamento/" + id);
    }

    create(data: object) {
        return axiosInstance.post("/v1/folhaspagamento", data);
    }

    createFromId(collaboratorId: number) {
        return axiosInstance.post("/v1/folhaspagamento/colaborador/" + collaboratorId);
    }

}