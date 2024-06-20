import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class RouteStatusService {

  listStatus() {
    return axiosInstance.get("/v1/routes/status");
  }

  findStatusById(id: string) {
    return axiosInstance.get("/v1/routes/status/" + id);
  }

  findStatusByRouteId(id: string) {
    return axiosInstance.get("/v1/routes/" + id + "/status");
  }

}