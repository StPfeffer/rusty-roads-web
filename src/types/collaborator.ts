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
  name?: string,
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
    cnhNumber: string,
    cnhExpirationDate: string,
    idCnhType: string,
    collaboratorId: string,
  };
}

interface CnhType {
  id: string,
  code: string,
  description: string
}
