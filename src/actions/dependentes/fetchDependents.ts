"use server";
import { DependentService } from "@/services/DependentService";

const dependentService = new DependentService();

export const fetchDependents = async (collaboratorId: number): Promise<Dependente[]> => {
  try {
    const dependents = await dependentService.listByCollaboratorId(collaboratorId);

    return dependents.data as Dependente[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchDependent = async (id: number, collaboratorId: number): Promise<Dependente> => {
  console.log(id);

  try {
    const dependent = await dependentService.findByCollaboratorIdAndId(collaboratorId, id);

    return dependent.data as Dependente;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o Dependente!");
  }

};