"use server";

import { CompanyService } from "@/services/CompanyService";

const companyService = new CompanyService();

export const fetchCompany = async (): Promise<Empresa> => {
  try {
    const company = await companyService.get();

    return company.data as Empresa;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar a empresa!");
  }
};
