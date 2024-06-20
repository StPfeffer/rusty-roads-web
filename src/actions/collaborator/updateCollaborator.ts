"use server";

import { CollaboratorService } from "@/services/CollaboratorService";

const collaboratorService = new CollaboratorService();

export const updateCollaborator = async (id: string, data: Partial<Collaborator>): Promise<ActionResponse> => {
  try {
    await collaboratorService.update(id, data);

    return { success: { message: "Collaborator updated successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
