"use server";

import { VehicleDocumentService, VehicleService } from "@/services/VehicleService";

const vehicleService = new VehicleService();
const vehicleDocumentService = new VehicleDocumentService();

export const deleteVehicle = async (vehicleId: string): Promise<ActionResponse> => {
  try {

    try {
      await vehicleDocumentService.deleteByVehicleId(vehicleId);
    } catch (err) {
      // do nothing (there's no vehicle document to delete)
    }

    await vehicleService.delete(vehicleId);

    return { success: { message: "Vehicle deleted successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
