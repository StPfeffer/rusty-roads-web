import { fetchCollaboratorDiscount } from '@/actions/colaboradores/fetchCollaboratorDiscount';

const CollaboratorDiscountPage = async ({ params }) => {

  const { id, discountId } = params;
  const discount = await fetchCollaboratorDiscount(id, discountId);

  return (
    <div>
      <div>{discount.id}</div>
      <div>{discount.ativo}</div>
      <div>{discount.valor}</div>
      <div>{discount.desconto.nome}</div>
      <div>{discount.desconto.descricao}</div>
    </div>
  )
}

export default CollaboratorDiscountPage;
