"use server";

import { CollaboratorService } from "@/services/CollaboratorService";

const collaboratorService = new CollaboratorService();

export const fetchCollaborators = async (): Promise<Colaborador[]> => {
  try {
    const collaborators = await collaboratorService.list();

    return collaborators.data as Colaborador[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchCollaborator = async (id: number): Promise<Colaborador> => {
  console.log(id);

  try {
    const collaborator = await collaboratorService.findById(id);

    return collaborator.data as Colaborador;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o colaborador!");
  }

};
