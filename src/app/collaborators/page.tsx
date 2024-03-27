"use client";

import React, { useState, useEffect } from "react";
import { CollaboratorService } from "@/services/CollaboratorService";

const Collaborator = () => {
  const [collaborators, setCollaborators] = useState<Colaborador[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const collaboratorService = new CollaboratorService();

      try {
        const response = await collaboratorService.get();

        setCollaborators(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Colaboradores</h1>
      {collaborators.map(collaborator => (
        <div>
          <h2>{collaborator.nome}</h2>
          <p>{collaborator.cpf}</p>
          <p>{collaborator.rg}</p>
          <p>{collaborator.cnh}</p>
          <p>{collaborator.nome}</p>
          <p>{collaborator.admissao.toString()}</p>
          <p>{collaborator.genero}</p>
        </div>
      ))}
    </div>
  );
}

export default Collaborator;