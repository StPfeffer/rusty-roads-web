import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class DepartmentService {

    list() {
        return axiosInstance.get("/v1/departamentos")
    }

    listRoles(id: number) {
        return axiosInstance.get("v1/departamentos/" + id);
    }

}