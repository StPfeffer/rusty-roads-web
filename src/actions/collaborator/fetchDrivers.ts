"use server";

import { CollaboratorService } from "@/services/CollaboratorService";
import { DriverService } from "@/services/DriverService";

const driverService = new DriverService();
const collaboratorService = new CollaboratorService();

export const fetchDrivers = async (): Promise<ActionResponse> => {
  try {
    const drivers = await driverService.list();

    const updatedDrivers = await Promise.all(
      drivers.data.drivers.map(async (driver: Driver) => {
        const collaboratorResponse = await collaboratorService.findById(driver.collaboratorId);
        const collaborator = collaboratorResponse.data as Collaborator;
        return {
          ...driver,
          name: collaborator.name
        };
      })
    );

    return { success: { message: "", data: updatedDrivers as Driver[] } };
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
    const collaborator = await collaboratorService.findById(driver.data.collaboratorId);

    (driver.data as Driver).name = (collaborator.data as Collaborator).name;

    return { success: { message: "", data: driver.data as Driver } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the driver, please try again later", data: null } };
  }
};
