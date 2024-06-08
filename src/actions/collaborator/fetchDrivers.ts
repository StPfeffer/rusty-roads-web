"use server";

import { DriverService } from "@/services/DriverService";

const driverService = new DriverService();

export const fetchDrivers = async (): Promise<Driver[]> => {
  try {
    const drivers = await driverService.list();

    return drivers.data.drivers as Driver[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchDriver = async (id: string): Promise<Driver> => {
  try {
    const driver = await driverService.findById(id);

    return driver.data as Driver;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o motorista!");
  }

};
