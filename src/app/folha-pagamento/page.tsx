"use client";

import React, { useEffect, useState } from "react";

import { createPayroll } from "@/actions/folha-pagamento/createPayroll";
import { CollaboratorService } from "@/services/CollaboratorService";

const PayrollPage = () => {
  const [collaborators, setCollaborators] = useState<Colaborador[]>();
  const [payroll, setPayroll] = useState<FolhaPagamento>();

  useEffect(() => {
    const fetchData = async () => {
      const collaboratorService = new CollaboratorService();

      try {
        const response = await collaboratorService.list();

        setCollaborators(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [selectedCollaborator, setSelectedCollaborator] = useState(1);

  const handleCreatePayroll = async () => {
    try {
      const response = await createPayroll(selectedCollaborator);

      if (response) {
        setPayroll(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleCollaboratorChange = (event) => {
    setSelectedCollaborator(event.target.value);
  };

  function sumValues(array) {
    let total = 0;

    if (array) {
      array.forEach(item => {
        total += item.valor;
      });
    }

    return total;
  }

  return (
    <div className="w-full flex-col gap-2 mt-8 space-y-4">
      <div className="flex justify-end space-x-4">
        <div id="colaborador" className="w-1/4 flex justify-between bg-padrao2 p-4 rounded-lg content-center ">
          <label className=" p-1 font-semibold text-lg ">Colaborador:</label>

          <select value={selectedCollaborator} onChange={handleCollaboratorChange} className="bg-padrao3 p-1 ml-2 rounded-md">
            {collaborators && collaborators.map((collaborator) => (
              <option id={collaborator.id} key={collaborator.id} value={collaborator.id}>{collaborator.nome}</option>
            ))}
          </select>
        </div>

        <button onClick={handleCreatePayroll} className="bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded-lg text-lg">Gerar Folha</button>
      </div>

      <div className="flex space-x-4 mt-10">
        <div id="informaçõesColaborador" className="flex-none bg-padrao3 p-4 pr-8 rounded-lg">

          <h3 className="text-3xl font-bold mb-2 text-blue-400">{payroll?.colaborador.nome}</h3>

          <div className="flex text-xl font-semibold">
            <span className="mr-10 ">{payroll?.colaborador.contrato.cargo.nome}</span>
            <span>Nível {payroll?.colaborador.contrato.cargo.nivel}</span>
          </div>
        </div>

        <div className="flex-1 bg-padrao3 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 ">Salário Base</h3>
          <p className="text-4xl font-bold text-green-600">R$ {payroll?.salarioBruto}</p>
        </div>

        <div className="flex-1 bg-padrao3 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Salário Líquido</h3>
          <p className="text-4xl font-bold text-green-600">R$ {payroll?.salarioLiquido}</p>
        </div>
      </div>

      <div id="lancamentos" className="flex space-x-4">
        <div id="beneficios" className="flex-1 bg-padrao2 p-4 rounded-lg">
          <h3 className="text-2xl font-bold mt-2 mb-6 w-96">Benefícios</h3>

          {payroll?.colaborador.beneficios.map((colaboradorBeneficio) => (
            <div key={colaboradorBeneficio.id} className="flex justify-between px-4 items-center mb-4">
              <div className="flex-col justify-center text-gray-200">
                <p className="text-xl">{colaboradorBeneficio.beneficio.nome}</p>
                <p className="text-sm font-thin">{colaboradorBeneficio.beneficio.descricao}</p>
              </div>

              <p className="text-xl text-green-700">R$ {colaboradorBeneficio.valor}</p>
            </div>
          ))}

          <div className="flex justify-between px-4 items-center mt-10 mb-4">
            <p className="text-2xl font-medium">Total</p>
            <p className="text-2xl font-medium text-green-600">R$ {sumValues(payroll?.colaborador.beneficios)}</p>
          </div>
        </div>


        <div id="descontos" className="flex-1 bg-padrao2 p-4 rounded-lg">
          <h3 className="text-2xl font-bold mt-2 mb-6 w-96">Descontos</h3>

          {payroll?.colaborador.descontos.map((colaboradorDesconto) => (
            <div key={colaboradorDesconto.id} className="flex justify-between px-4 items-center mb-4">
            <div className="flex-col justify-center text-gray-200">
              <p className="text-xl">{colaboradorDesconto.desconto.nome}</p>
              <p className="text-sm font-thin">{colaboradorDesconto.desconto.descricao}</p>
            </div>

            <p className="text-xl text-red-700">R$ {colaboradorDesconto.valor}</p>
          </div>
          ))}

          <div className="flex justify-between px-4 items-center mt-10 mb-4">
            <p className="text-2xl font-medium">Total</p>
            <p className="text-2xl font-medium text-red-600">R$ {sumValues(payroll?.colaborador.descontos)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayrollPage;