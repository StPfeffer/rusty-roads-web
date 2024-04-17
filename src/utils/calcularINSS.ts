export function calcularINSS(salarioBase: number): number {
  let parcela: number;

  if (salarioBase <= 1412.00) {
    parcela = 0;
  } else if (salarioBase <= 2666.68) {
    parcela = 21.18;
  } else if (salarioBase <= 4000.03) {
    parcela = 78.36;
  } else {
    parcela = 181.18;
  }

  return parcela;
}