export function calcularIRRF(salarioBase: number): number {
  let desconto: number;

  if (salarioBase <= 2259.20) {
      desconto = 0;
  } else if (salarioBase <= 2826.65) {
      desconto = salarioBase * 0.075 - 158.40;
  } else if (salarioBase <= 3751.05) {
      desconto = salarioBase * 0.15 - 370.40;
  } else if (salarioBase <= 4664.68) {
      desconto = salarioBase * 0.225 - 651.73;
  } else {
      desconto = salarioBase * 0.275 - 884.96;
  }

  return desconto;
}