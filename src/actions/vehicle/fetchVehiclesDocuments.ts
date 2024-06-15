"use server";

import { VehicleDocumentService } from "@/services/VehicleService";

const vehicleDocService = new VehicleDocumentService();

export const fetchVehiclesDocs = async (): Promise<VehicleDocument[]> => {
  try {
    const vehiclesDocs = await vehicleDocService.list();

    return vehiclesDocs.data.vehiclesDocuments as VehicleDocument[];
  } catch (error) {
    console.log(error);

    return [];
  } 

};

export const fetchVehicleDoc = async (vehicleId: string): Promise<VehicleDocument> => {
  try {
    const vehicleDoc = await vehicleDocService.findByVehicleId(vehicleId);

    return vehicleDoc.data as VehicleDocument;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o documento do veículo!");
  }

};
