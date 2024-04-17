"use server";
import { DependentService } from "@/services/DependentService";

const dependentService = new DependentService();

export const fetchDependents = async (): Promise<Dependente[]> => {
  try {
    const dependents = await dependentService.list();

    return dependents.data as Dependente[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchDependent = async (id: number): Promise<Dependente> => {
  console.log(id);

  try {
    const dependent = await dependentService.findById(id);

    return dependent.data as Dependente;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o Dependente!");
  }

};