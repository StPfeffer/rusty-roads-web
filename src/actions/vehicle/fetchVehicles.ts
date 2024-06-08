"use server";

import { VehicleService } from "@/services/VehicleService";

const vehicleService = new VehicleService();

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  try {
    const vehicles = await vehicleService.list();

    return vehicles.data.vehicles as Vehicle[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchVehicle = async (id: string): Promise<Vehicle> => {
  try {
    const vehicle = await vehicleService.findById(id);

    return vehicle.data as Vehicle;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o veículo!");
  }

};
