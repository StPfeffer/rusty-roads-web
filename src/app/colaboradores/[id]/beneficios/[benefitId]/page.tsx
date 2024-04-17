import { fetchCollaboratorBenefit } from '@/actions/colaboradores/fetchCollaboratorBenefit';

const CollaboratorBenefitPage = async ({ params }) => {

  const { id, benefitId } = params;
  const benefit = await fetchCollaboratorBenefit(id, benefitId);

  return (
    <div>
      <div>{benefit.id}</div>
      <div>{benefit.ativo}</div>
      <div>{benefit.usarPadrao}</div>
      <div>{benefit.valor}</div>
      <div>{benefit.beneficio.nome}</div>
      <div>{benefit.beneficio.descricao}</div>
      <div>{benefit.beneficio.valorPadrao}</div>
    </div>
  )
}

export default CollaboratorBenefitPage;
