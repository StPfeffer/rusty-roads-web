import { fetchCollaboratorPoint, fetchCollaboratorPoints } from "@/actions/colaboradores/fetchCollaboratorPoint";
import styles from "../../../../components/collaborator/singleCollaborator/singleCollaborator.module.css"

const ColaboradorPontoPage = async ({ params }) => {

  const { id } = params;
  const collaboratorPoint = await fetchCollaboratorPoints();

  return (
    <div className="bg-padrao2 p-4 mt-4 rounded-lg">
      <table className="w-full">
        <thead>
          <tr>
            <td className="pt-2.5 font-bold p-2">Mês</td>
            <td className="pt-2.5 font-bold p-2">Dias trabalhados</td>
            <td className="pt-2.5 font-bold p-2">Faltas</td>
            <td className="pt-2.5 font-bold p-2">Horas extras (100%)</td>
            <td className="pt-2.5 font-bold p-2">Horas extras (50%)</td>
            <td className="pt-2.5 font-bold p-2">Horas Faltas</td>
            <td className="pt-2.5 font-bold p-2">Detalhes</td>
          </tr>
        </thead>
        <tbody>
          {collaboratorPoint.map((point) => (
            <tr key={point.colaborador.id == id ?}>
              <td className="p-2">{point.mes}</td>
              <td className="p-2">{point.diasTrabalhados}</td>
              <td className="p-2">{point.faltas}</td>
              <td className="p-2">{point.horas100}</td>
              <td className="p-2">{point.horas50}</td>
              <td className="p-2">{point.horasAtraso}</td>
              <td className="p-2">
                <div className="flex gap-2.5">
                  {/* <Link href={`/colaboradores/${collaborator.id}`}> */}
                    <button className={`${styles.button} ${styles.view}`}>
                      Ver mais
                    </button>
                  {/* </Link> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>{collaboratorPoint.id}</div>
      <div>{collaboratorPoint.diasTrabalhados}</div>
      <div>{collaboratorPoint.faltas}</div>
      <div>{collaboratorPoint.horasAtraso}</div>
      <div>{collaboratorPoint.horas50}</div>
      <div>{collaboratorPoint.horas100}</div>
      <div>{collaboratorPoint.mes}</div> */}
    </div>
  )
}

export default ColaboradorPontoPage;