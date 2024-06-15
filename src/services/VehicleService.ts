import { BASE_URL } from '@/config/url';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

export class VehicleService {

  list() {
    return axiosInstance.get("/v1/vehicles");
  }

  findById(id: string) {
    return axiosInstance.get("/v1/vehicles/" + id);
  }

}

export class VehicleDocumentService {

  list() {
    return axiosInstance.get("/v1/documents");
  }

  findByVehicleId(vehicleId: string) {
    return axiosInstance.get("/v1/vehicles/"+ vehicleId + "/documents");
  }

}