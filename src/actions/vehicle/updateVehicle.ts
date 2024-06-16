"use server";

import { VehicleService } from "@/services/VehicleService";

const vehicleService = new VehicleService();

export const updateVehicle = async (id: string, data: Partial<Vehicle>): Promise<ActionResponse> => {
  try {
    await vehicleService.update(id, data);

    return { success: { message: "Vehicle updated successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
