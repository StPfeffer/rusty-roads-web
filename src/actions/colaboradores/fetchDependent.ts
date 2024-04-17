"use server";

import { DependentService } from "@/services/DependentService";

const dependentService = new DependentService();

export const fetchDependent = async (collaboratorId: number, dependentId: number): Promise<Dependente> => {
  try {
    const dependent = await dependentService.findByCollaboratorIdAndId(collaboratorId, dependentId);

    return dependent.data as Dependente;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o dependente do colaborador!");
  }
};
