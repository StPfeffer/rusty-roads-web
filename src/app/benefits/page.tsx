import React from "react";


const Benefits = () => {
  return (
    <div className="mt-12 w-full ">
      <table className="w-full ring-1  ring-slate-600 rounded-lg">
          <tr className="">
            <th className="py-1 overflow-hidden bg-slate-600 rounded-tl-lg w-32">Código</th>
            <th className="py-1 overflow-hidden bg-slate-600 min-w-32">Nome</th>
            <th className="py-1 overflow-hidden bg-slate-600 min-w-32">Descrição</th>
            <th className="py-1 overflow-hidden bg-slate-600 w-32">Ativo</th>
            <th className="py-1 overflow-hidden bg-slate-600 rounded-tr-lg w-24">Ações</th>
          </tr>
        <tr className="">
          <td className="p-2">teste</td>
          <td className="p-2">teste</td>
          <td className="p-2">teste</td>
          <td className="p-2">teteetete</td>
          <td className="p-2 flex justify-end">
            <button className="flex items-center bg-slate-800 hover:bg-slate-700 text-white rounded p-1 px-2">🖊</button>
          </td>
        </tr>
        <tr className="">
          <td className="p-2">teste</td>
          <td className="p-2">teste</td>
          <td className="p-2">teste</td>
          <td className="p-2">teteetete</td>
          <td className="p-2 flex justify-end">
            <button className="flex items-center bg-slate-800 hover:bg-slate-700 text-white rounded p-1 px-2">🖊</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Benefits;