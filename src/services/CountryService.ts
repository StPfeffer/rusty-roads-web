import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class CountryService {

  list() {
    return axiosInstance.get("/v1/countries");
  }

  findById(id: string) {
    return axiosInstance.get("/v1/countries/" + id);
  }

}