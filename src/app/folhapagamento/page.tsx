import React from "react";

const Payroll = () => {
  // const collaborators = await fetchCollaborators();

  return (
    <div className="w-full flex-col gap-2 mt-8 space-y-6">
      <div className="flex justify-end space-x-4">
        <div id="colaborador" className="w-1/4 flex justify-between bg-padrao2 p-4 rounded-lg content-center ">
          <label className=" p-1 font-semibold text-lg ">Colaborador:</label>
          <select className="bg-padrao3 p-1 ml-2 rounded-md">
              <option value="maca">Maçã</option>
              <option value="banana">Banana</option>
              <option value="laranja">Laranja</option>
              <option value="uva">Uva dsdadsad</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded-lg text-lg">Gerar Folha</button>
      </div>
      <div className="flex space-x-4 ">
        <div id="informaçõesColaborador" className="flex-none bg-padrao3 p-4 pr-8 rounded-lg">
          
          <h3 className="text-3xl font-bold mb-2 text-blue-400">Mateus Pfeffer</h3>
          
          <div className="flex text-xl font-semibold">
            <span className="mr-10 ">Auxiliar administrativo</span> 
            <span>Nível 1</span>
          </div>
        </div>

        <div className="flex-1 bg-padrao3 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 ">Salário Base</h3>
          <p className="text-3xl font-bold text-green-600">R$ 5.000,00</p>
        </div>

        <div className="flex-1 bg-padrao3 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Salário Líquido</h3>
          <p className="text-3xl font-bold text-green-600">R$ 5.000,00</p>
        </div>
      </div>


      <div id="lancamentos" className="flex space-x-4">


        <div id="beneficios" className="flex-1 bg-padrao2 p-4 rounded-lg">
          <h3 className="text-2xl font-bold mt-2 mb-6 w-96">Benefícios</h3>

          <div className="flex justify-between px-4 items-center mb-4">
            <div className="flex-col justify-center">
              <p className="text-xl">Vale Alimentação</p>
              <p className="text-sm font-thin">Descrição deste benefício, onde tal</p>
            </div>
            <p>R$ 400,00</p>
          </div>
        </div>


        <div id="descontos" className="flex-1 bg-padrao2 p-4 rounded-lg">
          <h3 className="text-2xl font-bold mt-2 mb-6 w-96">Descontos</h3>
        </div>
      </div>

      <div id="salarioLiquido"></div>
    </div>
  )
}

export default Payroll;