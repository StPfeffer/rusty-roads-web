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
    return axiosInstance.get("/v1/collaborators/drivers/" + id);
  }

  updateById(id: string, data: any) {
    return axiosInstance.put("/v1/collaborators/drivers/" + id);
  }

  deleteById(id: string) {
    return axiosInstance.delete("/v1/collaborators/drivers/" + id);
  }

  findByCollaboratorId(collaboratorId: string) {
    return axiosInstance.get("/v1/collaborators/" + collaboratorId + "/drivers");
  }

  updateByCollaboratorId(collaboratorId: string, data: any) {
    return axiosInstance.put("/v1/collaborators/" + collaboratorId + "/drivers", data);
  }

  deleteByCollaboratorId(collaboratorId: string) {
    return axiosInstance.delete("/v1/collaborators/" + collaboratorId + "/drivers");
  }

  create(collaboratorId: string, data: any) {
    return axiosInstance.post("/v1/collaborators/" + collaboratorId + "/driver", data);
  }

}