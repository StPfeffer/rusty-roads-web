import React from "react";

const Payroll = () => {
  const collaborators = await fetchCollaborators();

  return (
    <h1>Folha de Pagamento</h1>
  )
}

export default Payroll;