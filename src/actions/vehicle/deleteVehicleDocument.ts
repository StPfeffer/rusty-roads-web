"use server";

import { VehicleDocumentService } from "@/services/VehicleService";

const vehicleDocumentService = new VehicleDocumentService();

export const deleteVehicleDocument = async (vehicleId: string): Promise<ActionResponse> => {
  try {
    await vehicleDocumentService.deleteByVehicleId(vehicleId);

    return { success : { message: "Vehicle document deleted successfully" } };
  } catch (error: any) {
    console.error(error);

    return { error : { message: error.response?.data?.error?.message || error.message } };
  }
};
