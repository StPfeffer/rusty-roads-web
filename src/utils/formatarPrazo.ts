export function formatarPrazo(prazo: string): string {
  return prazo === 'MES' ? "Mês" : "Dia";
}