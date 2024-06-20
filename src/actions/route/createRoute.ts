"use server";

import { VehicleDocumentService, VehicleService } from "@/services/VehicleService";

const vehicleService = new VehicleService();
const vehicleDocumentService = new VehicleDocumentService();

export const createVehicle = async (vehicleData: CreateVehicleData): Promise<ActionResponse> => {
  try {
    vehicleData.vehicle.initialMileage = parseInt(vehicleData.vehicle.initialMileage.toString());
    vehicleData.document.exerciseYear = parseInt(vehicleData.document.exerciseYear.toString());
    vehicleData.document.modelYear = parseInt(vehicleData.document.modelYear.toString());
    vehicleData.document.manufactureYear = parseInt(vehicleData.document.manufactureYear.toString());

    const vehicle = await vehicleService.create(vehicleData.vehicle);

    const vehicleId: string = vehicle.data.id;

    try {
      await vehicleDocumentService.create(vehicleId, vehicleData.document);
    } catch (error: any) {
      await vehicleService.delete(vehicleId);

      throw new Error(error.response?.data?.error?.message || 'Failed to create vehicle document');
    }

    return { success: { message: "Vehicle created successfully" } }
  } catch (error: any) {
    return { error: { message: error.message } };
  }

};
