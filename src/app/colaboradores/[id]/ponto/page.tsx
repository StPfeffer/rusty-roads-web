import { fetchCollaboratorPoint } from "@/actions/colaboradores/fetchCollaboratorPoint";

const ColaboradorPontoPage = async ({ params }) => {

  const { id } = params;
  const collaboratorPoint = await fetchCollaboratorPoint(id);

  return (
    <div>
      <div>{collaboratorPoint.id}</div>
      <div>{collaboratorPoint.diasTrabalhados}</div>
      <div>{collaboratorPoint.faltas}</div>
      <div>{collaboratorPoint.horasAtraso}</div>
      <div>{collaboratorPoint.horas50}</div>
      <div>{collaboratorPoint.horas100}</div>
      <div>{collaboratorPoint.mes}</div>
    </div>
  )
}

export default ColaboradorPontoPage;