"use server";

import { VehicleService } from "@/services/VehicleService";

const vehicleService = new VehicleService();

export const updateVehicle = async (id: string, data: Partial<Vehicle>): Promise<Vehicle> => {
    try {
      const response = await vehicleService.update(id, data);
  
      return response.data as Vehicle;
    } catch (err) {
      console.log(err);
  
      throw new Error("Não foi possível atualizar o veículo!");
    }
  };