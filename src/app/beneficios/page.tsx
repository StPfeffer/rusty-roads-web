import React from "react";

import Link from "next/link";
import styles from "../../components/collaborator/collaborators.module.css";
import { fetchBenefits } from "@/actions/beneficios/fetchBenefits";

const BenefitsPage = async () => {
  const benefits = await fetchBenefits();

  return (
    <div className="w-full ">
      <div className="bg-[color:var(--bgSoft)] p-5 mt-5 rounded-lg">
        <div className="flex justify-between items-center">
          <Link href="/beneficios/adicionar">
            <button className="p-2.5 bg-[#5D57C9] border-none pointer rounded text-[color:var(--text)]" disabled>Criar Benefício</button>
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr className="">
              <td className="pt-2.5 font-bold p-2">Nome</td>
              <td className="pt-2.5 font-bold p-2">Descrição</td>
              <td className="pt-2.5 font-bold p-2">Valor Padrão</td>
              <td className="pt-2.5 font-bold p-2">Ativo</td>
              <td className="pt-2.5 font-bold p-2 ">Status</td>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit) => (
              <tr key={benefit.id}>
                <td className="p-2">{benefit.nome}</td>
                <td className="p-2">{benefit.descricao}</td>
                <td className="p-2">{benefit.valorPadrao}</td>
                <td className="p-2">{benefit.ativo ? "Sim" : "Não"}</td>
                <td className="p-2">
                  <div className="flex gap-2.5">
                    <Link href={`/beneficios/${benefit.id}`}>
                      <button className={`${styles.button} ${styles.view}`} disabled>
                        Detalhes
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BenefitsPage;