"use server";

import { PayrollService } from "@/services/PayrollService";

const payrollService = new PayrollService();

export const fetchPayrolls = async (): Promise<FolhaPagamento[]> => {
  try {
    const payrolls = await payrollService.list();

    return payrolls.data as FolhaPagamento[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchPayroll = async (id: number): Promise<FolhaPagamento> => {
  console.log(id);

  try {
    const payroll = await payrollService.findById(id);

    return payroll.data as FolhaPagamento;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar a folha de pagamento!");
  }

};
