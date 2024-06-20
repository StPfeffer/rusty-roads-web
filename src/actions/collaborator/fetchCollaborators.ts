"use server";

import { CollaboratorService } from "@/services/CollaboratorService";

const collaboratorService = new CollaboratorService();

export const fetchCollaborators = async (): Promise<ActionResponse> => {
  try {
    const collaborators = await collaboratorService.list();

    return { success: { message: "", data: collaborators.data.collaborators as Collaborator[] } };
  } catch (error) {
    return { error: { message: "An error occurred when trying to search for collaborators, please try again later", data: [] } };
  }

};

export const fetchCollaborator = async (id: string): Promise<ActionResponse> => {
  try {
    const collaborator = await collaboratorService.findById(id);

    return { success: { message: "", data: collaborator.data as Collaborator } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the collaborator, please try again later", data: null } };
  }

};
