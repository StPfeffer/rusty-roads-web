"use server";

import { VehicleDocumentService } from "@/services/VehicleService";

const vehicleDocService = new VehicleDocumentService();

export const updateVehicleDocument = async (vehicleId: string, data: Partial<VehicleDocument>): Promise<VehicleDocument> => {
    try {
      const response = await vehicleDocService.updateByVehicleId(vehicleId, data);
  
      return response.data as VehicleDocument;
    } catch (err) {
      console.log(err);
  
      throw new Error("Não foi possível atualizar o veículo!");
    }
  };