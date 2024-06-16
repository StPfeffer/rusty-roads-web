"use server";

import { VehicleDocumentService } from "@/services/VehicleService";

const vehicleDocService = new VehicleDocumentService();

export const fetchVehiclesDocs = async (): Promise<ActionResponse> => {
  try {
    const vehiclesDocs = await vehicleDocService.list();

    return { success: { message: "", data: vehiclesDocs.data.vehiclesDocuments as VehicleDocument[] } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the vehicle document, please try again later", data: [] } };
  }
};

export const fetchVehicleDoc = async (vehicleId: string): Promise<ActionResponse> => {
  try {
    const vehicleDoc = await vehicleDocService.findByVehicleId(vehicleId);

    return { success: { message: "", data: vehicleDoc.data as VehicleDocument } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the vehicle document, please try again later", data: null } };
  }
};
