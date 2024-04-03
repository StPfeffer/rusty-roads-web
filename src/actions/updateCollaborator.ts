"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { CollaboratorService } from "@/services/CollaboratorService";

const collaboratorService = new CollaboratorService();

export const updateCollaborator = async (formData) => {
  const { id, cpf, rg, cnh, nome, email, admissao, genero } = Object.fromEntries(formData);

  try {
    const updateFields = {
      id,
      cpf,
      rg,
      cnh,
      nome,
      email,
      admissao,
      genero
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) && delete (updateFields as any)[key]
    );
    
    await collaboratorService.update(id, updateFields);
  } catch (error) {
    throw new Error("Falha ao atualizar o colaborador!");
  }

  revalidatePath("/collaborators");
  redirect("/collaborators");

};