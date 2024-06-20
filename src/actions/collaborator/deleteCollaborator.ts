"use server";

import { CollaboratorService } from "@/services/CollaboratorService";
import { DriverService } from "@/services/DriverService";

const collaboratorService = new CollaboratorService();
const driverService = new DriverService();

export const deleteCollaborator = async (collaboratorId: string): Promise<ActionResponse> => {
  try {

    try {
      await driverService.deleteByCollaboratorId(collaboratorId);
    } catch (err) {
      // do nothing (there's no driver to delete)
    }

    await collaboratorService.delete(collaboratorId);

    return { success: { message: "Collaborator deleted successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
