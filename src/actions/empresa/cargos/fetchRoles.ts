"use server";

import { RoleService } from "@/services/RoleService";



const roleService = new RoleService();

export const fetchRoles = async (): Promise<Cargo[]> => {
  try {
    const roles = await roleService.list();

    return roles.data as Cargo[];
  } catch (error) {
    console.log(error);

    return [];
  }

};