"use server";

import { PayrollService } from "@/services/PayrollService";

const payrollService = new PayrollService();

export const createPayroll = async (formData) => {
  try {
    await payrollService.create(formData);
  } catch (error) {
    throw new Error("Falha ao criar a folha de pagamento!");
  }
}