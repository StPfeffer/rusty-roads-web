"use client";
import { BenefitService } from "@/services/BenefitService";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../components/collaborator/collaborators.module.css";
import { DiscountService} from '@/services/DiscountService';




const Discount = () => {
  const [discounts, setDiscounts] = useState<Desconto[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const discountService = new DiscountService();

      try {
        const response = await discountService.list();
        setDiscounts(response.data);

      } catch (error) {
        console.log (error);
      }
    }

    fetchData();
  })

  return (
    <div className="w-full ">
      <div className={styles.container}>
      <div className="flex justify-between items-center">
        <Link href="/collaborators/add">
          <button className={styles.addButton}>Adicionar</button>
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
            <tr>
              <td className="p-2">{discount.nome}</td>
              <td className="p-2">{discount.descricao}</td>
              <td className="p-2">{discount.ativo ? "Ativo" : "Inativo"}</td>
              <td className="p-2">
                <div className="flex gap-2.5">
                  <Link href={`/collaborators/${discount.codigo}`}>
                    <button className={`${styles.button} ${styles.view}`}>
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
      {/* <table className="w-full ring-1  ring-slate-600 rounded-lg">
        <thead>
        <tr className="">
            <th className="py-1 overflow-hidden bg-slate-600 rounded-tl-lg w-32">Código</th>
            <th className="py-1 overflow-hidden bg-slate-600 min-w-32">Nome</th>
            <th className="py-1 overflow-hidden bg-slate-600 min-w-32">Descrição</th>
            <th className="py-1 overflow-hidden bg-slate-600 w-32">Valor Padrão</th>
            <th className="py-1 overflow-hidden bg-slate-600 w-32">Ativo</th>
            <th className="py-1 overflow-hidden bg-slate-600 rounded-tr-lg w-24">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
              <td className="p-2">t</td>
              <td className="p-2">t</td>
              <td className="p-2">t</td>
              <td className="p-2">t</td>
              <td className="p-2">t</td>
              <td className="p-2 flex justify-end">
                <button className="flex items-center bg-slate-800 hover:bg-slate-700 text-white rounded p-1 px-2">🖊</button>
              </td>
            </tr>
          {benefits.map(benefit => (
            <tr className="">
              <td className="p-2">{benefit.codigo}</td>
              <td className="p-2">{benefit.nome}</td>
              <td className="p-2">{benefit.descricao}</td>
              <td className="p-2">{benefit.valorPadrão}</td>
              <td className="p-2">{benefit.ativo.toString()}</td>
              <td className="p-2 flex justify-end">
                <button className="flex items-center bg-slate-800 hover:bg-slate-700 text-white rounded p-1 px-2">🖊</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default Discount;