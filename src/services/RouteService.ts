import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class RouteService {

  list() {
    return axiosInstance.get("/v1/routes");
  }

  findById(id: string) {
    return axiosInstance.get("/v1/routes/" + id);
  }

  create(data: any) {
    return axiosInstance.post("/v1/routes", data);
  }

  update(id: string, data: any) {
    return axiosInstance.put("/v1/routes/" + id, data);
  }

  delete(id: string) {
    return axiosInstance.delete("/v1/routes/" + id);
  }

}