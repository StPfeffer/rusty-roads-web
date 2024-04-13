"use server";

import { PayrollService } from "@/services/PayrollService";

const payrollService = new PayrollService();

export const createPayroll = async (collaboratorId: number) => {
  console.log(collaboratorId);

  try {
    const payroll = await payrollService.createFromId(collaboratorId);

    return payroll.data as FolhaPagamento;
  } catch (error) {
  }
}