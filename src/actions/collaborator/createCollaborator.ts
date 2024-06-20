"use server"

import { CollaboratorService } from "@/services/CollaboratorService";
import { DriverService } from "@/services/DriverService";

const collaboratorService = new CollaboratorService();
const driverService = new DriverService();

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const createCollaborator = async (collaboratorData: CreateCollaboratorData): Promise<ActionResponse> => {
  try {
    const collaborator = await collaboratorService.create(collaboratorData.collaborator);

    const collaboratorId: string = collaborator.data.id;
    collaboratorData.driver.collaboratorId = collaboratorId;

    console.log(collaboratorData);

    try {
      await driverService.create(collaboratorData.driver);
    } catch (error: any) {
      await collaboratorService.delete(collaboratorId);

      throw new Error(error.response?.data?.error?.message || 'Failed to create driver');
    }

    return { success: { message: "Collaborator created successfully" } }
  } catch (error: any) {
    return { error: { message: error.message } };
  }

};
