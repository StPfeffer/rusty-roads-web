"use server";

import { CollaboratorDiscountService } from "@/services/CollaboratorDiscountService";

const collaboratorDiscountService = new CollaboratorDiscountService();

export const fetchCollaboratorDiscount = async (collaboratorId: number, discountId: number): Promise<ColaboradorDesconto> => {
  try {
    const collaboratorDiscount = await collaboratorDiscountService.findByCollaboratorIdAndId(collaboratorId, discountId);

    return collaboratorDiscount.data as ColaboradorDesconto;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o desconto do colaborador!");
  }
};
