import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class DriverService {

  list() {
    return axiosInstance.get("/v1/collaborators/drivers");
  }

  findById(id: string) {
    return axiosInstance.get("/v1/collaborators/drivers" + id);
  }

}