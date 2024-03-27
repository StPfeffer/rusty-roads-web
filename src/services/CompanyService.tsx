import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export class CompanyService {

    get() {
        return axiosInstance.get("/v1/empresa/12345678901234")
    }

}