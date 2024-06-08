import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class StateService {

  list() {
    return axiosInstance.get("/v1/states");
  }

  findById(id: string) {
    return axiosInstance.get("/v1/states/" + id);
  }

}