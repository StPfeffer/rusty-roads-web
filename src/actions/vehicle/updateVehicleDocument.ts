"use server";

import { VehicleDocumentService } from "@/services/VehicleService";

const vehicleDocService = new VehicleDocumentService();

export const updateVehicleDocument = async (vehicleId: string, data: Partial<VehicleDocument>): Promise<ActionResponse> => {
  try {
    await vehicleDocService.updateByVehicleId(vehicleId, data);

    return { success: { message: "Vehicle document updated successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
