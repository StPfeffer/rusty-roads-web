import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class CollaboratorService {

    get() {
        return axiosInstance.get("/v1/colaboradores")
    }

}