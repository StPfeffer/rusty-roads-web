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

  update(id: string, data: any) {
    return axiosInstance.put("/v1/vehicles/" + id, data);
  }

  delete(id: string) {
    return axiosInstance.delete("/v1/vehicles/" + id);
  }

}

export class VehicleDocumentService {

  list() {
    return axiosInstance.get("/v1/documents");
  }

  findByVehicleId(vehicleId: string) {
    return axiosInstance.get("/v1/vehicles/" + vehicleId + "/documents");
  }

  updateByVehicleId(vehicleId: string, data: any) {
    return axiosInstance.put("/v1/vehicles/" + vehicleId + "/documents", data);
  }

  deleteByVehicleId(vehicleId: string) {
    return axiosInstance.delete("/v1/vehicles/" + vehicleId + "/documents",);
  }

}
