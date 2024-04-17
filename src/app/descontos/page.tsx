import React from "react";

import Link from "next/link";
import styles from "../../components/collaborator/collaborators.module.css";
import { fetchDiscounts } from "@/actions/descontos/fetchDiscounts";

const DiscountsPage = async () => {
  const discounts = await fetchDiscounts();

  return (
    <div className="bg-[color:var(--bgSoft)] p-5 mt-5 rounded-lg">
      <div className="flex justify-between items-center">
        <Link href="/descontos/adicionar">
          <button className="p-2.5 bg-[#5D57C9] border-none pointer rounded text-[color:var(--text)]" disabled>Criar Desconto</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="">
            <td className="pt-2.5 font-bold p-2">Nome</td>
            <td className="pt-2.5 font-bold p-2">Descrição</td>
            <td className="pt-2.5 font-bold p-2">Ativo</td>
            <td className="pt-2.5 font-bold p-2 ">Status</td>
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount) => (
            <tr key={discount.id}>
              <td className="p-2">{discount.nome}</td>
              <td className="p-2">{discount.descricao}</td>
              <td className="p-2">{discount.ativo ? "Sim" : "Não"}</td>
              <td className="p-2">
                <div className="flex gap-2.5">
                  <Link href={`/descontos/${discount.id}`}>
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
  )
}

export default DiscountsPage;