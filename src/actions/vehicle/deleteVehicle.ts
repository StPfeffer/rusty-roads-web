"use server";

import { VehicleService } from "@/services/VehicleService";

const vehicleService = new VehicleService();

export const deleteVehicle = async (vehicleId: string): Promise<void> => {
  try {
    await vehicleService.delete(vehicleId);
    console.log('Veículo excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir o veículo:', error);
    throw new Error('Erro ao excluir o veículo: ' + error.message);
  }
};
