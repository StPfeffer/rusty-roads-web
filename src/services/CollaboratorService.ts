import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class CollaboratorService {

  list() {
    return axiosInstance.get("/v1/collaborators");
  }

  findById(id: string) {
    return axiosInstance.get("/v1/collaborators/" + id);
  }

  create(data: any) {
    return axiosInstance.post("/v1/collaborators", data);
  }

  update(id: string, data: any) {
    return axiosInstance.put("/v1/collaborators/" + id, data);
  }

  delete(id: string) {
    return axiosInstance.delete("/v1/collaborators/" + id);
  }

}