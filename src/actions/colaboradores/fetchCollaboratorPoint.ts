"use server";

import { CollaboratorPointService } from "@/services/CollaboratorPointService";

const collaboratorPointService = new CollaboratorPointService();

export const fetchCollaboratorPoints = async (): Promise<ColaboradorPonto[]> => {
  try {
    const collaboratorsPoints = await collaboratorPointService.list();

    return collaboratorsPoints.data as ColaboradorPonto[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchCollaboratorPoint = async (id: number): Promise<ColaboradorPonto> => {
  try {
    const collaboratorPoint = await collaboratorPointService.findByCollaboratorId(id);

    return collaboratorPoint.data as ColaboradorPonto;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o ponto do colaborador!");
  }
};
