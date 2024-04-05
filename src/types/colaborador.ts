interface Colaborador {
    id: number,
    cpf: string,
    rg: string,
    cnh: string,
    nome: string,
    email: string,
    admissao: Date,
    genero: string,
    contrato: Contrato
}