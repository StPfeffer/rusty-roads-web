interface Empresa {
  id: number,
  cnpj: string,
  razaoSocial: string,
  nomeFantasia: string,
  endereco: string,
  regimeTributario: string,
  inscricaoEstadual: string,
  inscricaoMunicipal: string,
  departamentos: Departamento[]
}
