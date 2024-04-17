import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class ContractService {

  findByCollaboratorId(id: number) {
    return axiosInstance.get("/v1/colaboradores/" + id + "/contrato");
  }

}