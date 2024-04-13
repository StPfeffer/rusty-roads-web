import React from "react";

const Payroll = () => {
  // const collaborators = await fetchCollaborators();

  return (
    <div className="w-full flex-col gap-2 mt-8">
      <div className="flex justify-end">
        <div id="colaborador" className="w-1/4 flex justify-between bg-padrao2 p-4 rounded-lg content-center ">
          <label className=" p-1 font-semibold text-lg ">Colaborador:</label>
          <select className="bg-padrao3 p-1 ml-2 rounded-md">
              <option value="maca">Maçã</option>
              <option value="banana">Banana</option>
              <option value="laranja">Laranja</option>
              <option value="uva">Uva dsdadsad</option>
          </select>
        </div>
      </div>

      <div id="informaçõesColaborador"></div>

      <div id="lancamentos">
        <div id="beneficios">
        </div>

        <div id="descontos">
        </div>
      </div>

      <div id="salarioLiquido"></div>
    </div>
  )
}

export default Payroll;