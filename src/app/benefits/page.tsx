"use client";
import { BenefitService } from "@/services/BenefitService";
import React, { useEffect, useState } from "react";


const Benefit = () => {
  const [benefits, setBenefits] = useState<Beneficio[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const benefitService = new BenefitService();

      try {
        const response = await benefitService.get();
        setBenefits(response.data);

      } catch (error) {
        console.log (error);
      }
    }
  })

  return (
    <div className="mt-12 w-full ">
      <table className="w-full ring-1  ring-slate-600 rounded-lg">
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
      </table>
    </div>
  )
}

export default Benefit;