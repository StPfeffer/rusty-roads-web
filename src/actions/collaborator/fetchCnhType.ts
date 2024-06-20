"use server";

import { CnhTypeService } from "@/services/CnhTypeService";

const cnhTypeService = new CnhTypeService();

export const fetchCnhTypes = async (): Promise<ActionResponse> => {
  try {
    const cnhTypes = await cnhTypeService.list();

    return { success: { message: "", data: cnhTypes.data.types as CnhType[] } };
  } catch (error) {
    return { error: { message: "An error occurred when trying to search for cnh types, please try again later", data: [] } };
  }

};

export const fetchCnhType = async (id: string): Promise<ActionResponse> => {
  try {
    const cnhType = await cnhTypeService.findById(id);

    return { success: { message: "", data: cnhType.data as CnhType } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the cnh type, please try again later", data: null } };
  }

};
