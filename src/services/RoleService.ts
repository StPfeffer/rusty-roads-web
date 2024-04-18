import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class RoleService {

  list() {
    return axiosInstance.get("/v1/cargos");
  }

  findById(id: number) {
    return axiosInstance.get("/v1/cargos/" + id);
  }

  update(id: number, data: object) {
    return axiosInstance.post("/v1/cargos/" + id, data);
  }

}