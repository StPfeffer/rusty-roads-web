import { fetchContract } from "@/actions/contrato/fetchContract";

const ColaboradorContratoPage = async ({ params }) => {

  const { id } = params;
  const contract = await fetchContract(id);

  return (
    <div>
      <div>{contract.id}</div>
      <div>{contract.tipo}</div>
      <div>{contract.cargaHoraria}</div>
      <div>{contract.tipoFiliacao}</div>
      <div>{contract.cargo.nome}</div>
      <div>{contract.empresa.nomeFantasia}</div>
    </div>
  )
}

export default ColaboradorContratoPage;