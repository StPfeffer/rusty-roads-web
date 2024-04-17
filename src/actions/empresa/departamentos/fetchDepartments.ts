"use server";

import { DepartmentService } from "@/services/DepartmentService";

const departmentService = new DepartmentService();

export const fetchDepartments = async (): Promise<Departamento[]> => {
  try {
    const departaments = await departmentService.list();

    return departaments.data as Departamento[];
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível listar os departamentos!");
  }
};

export const fetchRoles = async (id: number): Promise<Cargo[]> => {
  try {
    const roles = await departmentService.listRoles(id);

    return roles.data as Cargo[];
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível listar os cargos!");
  }
}