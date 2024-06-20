"use server";

import { CollaboratorService } from "@/services/CollaboratorService";
import { DriverService } from "@/services/DriverService";

const driverService = new DriverService();
const collaboratorService = new CollaboratorService();

export const fetchDrivers = async (): Promise<ActionResponse> => {
  try {
    const drivers = await driverService.list();

    return { success: { message: "", data: drivers.data.drivers as Driver[] } };
  } catch (error) {
    return { error: { message: "An error occurred when trying to search for drivers, please try again later", data: [] } };
  }
};

export const fetchDriverByCollaboratorId = async (collaboratorId: string): Promise<ActionResponse> => {
  try {
    const collaborator = await collaboratorService.findById(collaboratorId);
    const driver = await driverService.findByCollaboratorId(collaboratorId);

    (driver.data as Driver).name = (collaborator.data as Collaborator).name

    return { success: { message: "", data: driver.data as Driver } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the driver, please try again later", data: null } };
  }
};

export const fetchDriver = async (driverId: string): Promise<ActionResponse> => {
  try {
    const driver = await driverService.findById(driverId);

    return { success: { message: "", data: driver.data as Driver } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the driver, please try again later", data: null } };
  }
};
