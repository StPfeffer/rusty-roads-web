"use server";

import { DriverService } from "@/services/DriverService";
const driverService = new DriverService();

export const deleteDriverByCollaboratorId = async (collaboratorId: string): Promise<ActionResponse> => {
  try {
    await driverService.deleteByCollaboratorId(collaboratorId);

    return { success : { message: "Driver deleted successfully" } };
  } catch (error: any) {
    console.error(error);

    return { error : { message: error.response?.data?.error?.message || error.message } };
  }
};

export const deleteDriver = async (collaboratorId: string): Promise<ActionResponse> => {
  try {
    await driverService.deleteById(collaboratorId);

    return { success : { message: "Driver deleted successfully" } };
  } catch (error: any) {
    console.error(error);

    return { error : { message: error.response?.data?.error?.message || error.message } };
  }
};