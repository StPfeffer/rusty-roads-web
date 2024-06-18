"use server";

import { DriverService } from "@/services/DriverService";

const driverService = new DriverService();

export const updateDriver = async (collaboratorId: string, data: Partial<Driver>): Promise<ActionResponse> => {
  try {
    await driverService.updateByCollaboratorId(collaboratorId, data);

    return { success: { message: "Driver updated successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
