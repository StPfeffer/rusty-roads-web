"use server";

import { CollaboratorBenefitService } from "@/services/CollaboratorBenefitService";

const collaboratorBenefitService = new CollaboratorBenefitService();

export const fetchCollaboratorBenefit = async (collaboratorId: number, benefitId: number): Promise<ColaboradorBeneficio> => {
  try {
    const collaboratorBenefit = await collaboratorBenefitService.findByCollaboratorIdAndId(collaboratorId, benefitId);

    return collaboratorBenefit.data as ColaboradorBeneficio;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o benefício do colaborador!");
  }
};
