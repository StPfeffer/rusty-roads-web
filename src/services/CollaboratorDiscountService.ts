import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class CollaboratorDiscountService {

  findByCollaboratorIdAndId(collaboratorId: number, discountId: number) {
    return axiosInstance.get("/v1/colaboradores/" + collaboratorId + "/descontos/" + discountId);
  }

}