"use server";

import { CollaboratorService } from "@/services/CollaboratorService";

const collaboratorService = new CollaboratorService();

export const fetchCollaborators = async (): Promise<Collaborator[]> => {
  try {
    const collaborators = await collaboratorService.list();

    return collaborators.data.collaborators as Collaborator[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchCollaborator = async (id: string): Promise<Collaborator> => {
  try {
    const collaborator = await collaboratorService.findById(id);

    return collaborator.data as Collaborator;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o colaborador!");
  }

};
