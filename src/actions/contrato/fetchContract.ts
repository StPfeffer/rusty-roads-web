"use server";

import { ContractService } from "@/services/ContractService";

const contractService = new ContractService();

export const fetchContract = async (id: number): Promise<Contrato> => {
  try {
    const contract = await contractService.findByCollaboratorId(id);

    return contract.data as Contrato;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o contrato!");
  }
};
