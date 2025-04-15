export interface Ocorrencia {
    id: number;
    tipo: string;
    horarioEsperado: string; // Exemplo: "07:00:00"
    horarioBatido: string | null; // Exemplo: "07:13" ou null
    usuarioIntegracaoId: number;
    data: string; // ISO date string, exemplo: "2025-03-25T03:00:00.000Z"
  }