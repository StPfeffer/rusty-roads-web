"use server";

import { AddressService } from "@/services/AddressService";
import { CityService } from "@/services/CityService";
import { StateService } from "@/services/StateService";

const addressService = new AddressService();
const cityService = new CityService();
const stateService = new StateService();

export const fetchAddresses = async (): Promise<ActionResponse> => {
  try {
    const addresses = await addressService.list();

    return { success: { message: "", data: addresses.data.addresses as Address[] } };
  } catch (error) {
    return { error: { message: "An error occurred when trying to search for addresses, please try again later", data: [] } };
  }

};

export const fetchAddress = async (id: string): Promise<ActionResponse> => {
  try {
    const address = await addressService.findById(id);
    const city = await cityService.findById(address.data.cityId);
    const state = await stateService.findById(city.data.stateId);

    (address.data as Address).city = city.data as City;
    ((address.data as Address).city as City).state = state.data as State;

    return { success: { message: "", data: address.data as Address } };
  } catch (err) {
    return { error: { message: "An error occurred when trying get the address, please try again later", data: null } };
  }

};
