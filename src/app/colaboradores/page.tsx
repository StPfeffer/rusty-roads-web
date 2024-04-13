import React from "react";

import { fetchCollaborators } from "@/actions/colaboradores/fetchCollaborators";
import Image from "next/image";
import Link from "next/link";
import styles from "../../components/collaborator/collaborators.module.css";
import { formatarData } from "@/utils/formatarData";

const CollaboratorsPage = async () => {
  const collaborators = await fetchCollaborators();

  return (
    <div className="bg-[color:var(--bgSoft)] p-5 mt-5 rounded-lg">
      <div className="flex justify-between items-center">
        <Link href="/collaborators/adicionar">
          <button className="p-2.5 bg-[#5D57C9] border-none pointer rounded text-[color:var(--text)]">Adicionar</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="pt-2.5 font-bold p-2">Nome</td>
            <td className="pt-2.5 font-bold p-2">Email</td>
            <td className="pt-2.5 font-bold p-2">Admissão</td>
            <td className="pt-2.5 font-bold p-2">Cargo</td>
            <td className="pt-2.5 font-bold p-2">Detalhes</td>
          </tr>
        </thead>
        <tbody>
          {collaborators.map((collaborator) => (
            <tr key={collaborator.id}>
              <td className="p-2">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="round object-cover rounded-3xl mr-2"
                  />
                  {collaborator.nome}
                </div>
              </td>
              <td className="p-2">{collaborator.email}</td>
              <td className="p-2">{formatarData(collaborator.admissao?.toString())}</td>
              <td className="p-2">{collaborator.contrato.cargo.nome}</td>
              <td className="p-2">
                <div className="flex gap-2.5">
                  <Link href={`/colaboradores/${collaborator.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Ver mais
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollaboratorsPage;