import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class CityService {

  list() {
    return axiosInstance.get("/v1/cities");
  }

  findById(id: string) {
    return axiosInstance.get("/v1/cities/" + id);
  }

}