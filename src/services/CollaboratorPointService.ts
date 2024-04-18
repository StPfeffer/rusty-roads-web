import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class CollaboratorPointService {

  findByCollaboratorId(id: number) {
    return axiosInstance.get("/v1/colaboradores/" + id + "/ponto");
  }

  listByCollaboratorId(id: number) {
    return axiosInstance.get("/v1/colaboradores/" + id + "/pontos");
  }

}
