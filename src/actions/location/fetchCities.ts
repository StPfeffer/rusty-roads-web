"use server";

import { CityService } from "@/services/CityService";

const cityService = new CityService();

export const fetchCities = async (): Promise<City[]> => {
  try {
    const cities = await cityService.list();

    return cities.data.cities as City[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchCity = async (id: string): Promise<City> => {
  try {
    const city = await cityService.findById(id);

    return city.data as City;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar a cidade!");
  }

};
