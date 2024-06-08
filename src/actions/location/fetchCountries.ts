"use server";

import { CountryService } from "@/services/CountryService";

const countryService = new CountryService();

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const countries = await countryService.list();

    return countries.data.countries as Country[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchCountry = async (id: string): Promise<Country> => {
  try {
    const country = await countryService.findById(id);

    return country.data as Country;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o país!");
  }

};
