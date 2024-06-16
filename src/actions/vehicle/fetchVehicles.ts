"use server";

import { VehicleService } from "@/services/VehicleService";

const vehicleService = new VehicleService();

export const fetchVehicles = async (): Promise<ActionResponse> => {
  try {
    const vehicles = await vehicleService.list();

    return { success: { message: "", data: vehicles.data.vehicles as Vehicle[] } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying to search for vehicles, please try again later", data: [] } };
  }

};

export const fetchVehicle = async (id: string): Promise<ActionResponse> => {
  try {
    const vehicle = await vehicleService.findById(id);

    return { success: { message: "", data: vehicle.data as Vehicle } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the vehicle, please try again later", data: null } };
  }

};
