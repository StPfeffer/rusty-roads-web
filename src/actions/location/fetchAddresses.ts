"use server";

import { AddressService } from "@/services/AddressService";

const addressService = new AddressService();

export const fetchAddresses = async (): Promise<Address[]> => {
  try {
    const addresses = await addressService.list();

    return addresses.data.addresses as Address[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchAddress = async (id: string): Promise<Address> => {
  try {
    const address = await addressService.findById(id);

    return address.data as Address;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o endereço!");
  }

};
