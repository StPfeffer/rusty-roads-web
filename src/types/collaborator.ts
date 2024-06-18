interface Collaborator {
  id: string,
  name: string,
  cpf: string,
  rg: string,
  email: string,
  driver?: Driver,
  createdAt: string,
  updatedAt: string,
}

interface Driver {
  id: string,
  cnh_number: string,
  cnh_expiration_date: string,
  id_cnh_type: string,
  collaboratorId: string,
  createdAt: string,
  updatedAt: string,
}

interface CreateCollaboratorData {
  collaborator: {
    name: string,
    cpf: string,
    rg: string,
    email: string,
  };
  driver: {
    cnh_number: string,
    cnh_expiration_date: string,
    id_cnh_type: string,
  };
}