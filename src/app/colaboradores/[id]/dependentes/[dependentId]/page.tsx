import { fetchDependent } from "@/actions/colaboradores/fetchDependent";

const CollaboradorDependentPage = async ({ params }) => {

  const { id, dependentId } = params;
  const dependent = await fetchDependent(id, dependentId);

  return (
    <div>
      <div>{dependent.id}</div>
      <div>{dependent.nome}</div>
      <div>{dependent.nascimento.toString()}</div>
      <div>{dependent.parentesco}</div>
    </div>
  )
}

export default CollaboradorDependentPage;
