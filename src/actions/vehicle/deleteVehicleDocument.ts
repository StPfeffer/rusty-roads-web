"use server";

import { VehicleDocumentService } from "@/services/VehicleService";

const vehicleDocumentService = new VehicleDocumentService();

export const deleteVehicleDocument = async (vehicleId: string): Promise<void> => {
  try {
    await vehicleDocumentService.deleteByVehicleId(vehicleId);
    console.log('Veículo excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir o veículo:', error);
    throw new Error('Erro ao excluir o veículo: ' + error.message);
  }
};
