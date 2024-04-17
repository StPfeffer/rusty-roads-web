import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class DependentService {

  findByCollaboratorIdAndId(collaboratorId: number, dependentId: number) {
    console.log("/v1/colaboradores/" + collaboratorId + "/dependentes/" + dependentId);

    return axiosInstance.get("/v1/colaboradores/" + collaboratorId + "/dependentes/" + dependentId);
  }

}