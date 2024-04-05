interface Contrato {
  id: number,
  tipo: string,
  cargaHoraria: number,
  tipoFiliacao: string,
  cargo: Cargo,
  empresa: Empresa,
}