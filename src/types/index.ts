export interface Usuario {
  id: string;
  nome: string;
  saldoVirtual: number;
  avatar?: string;
}

export interface ConfiguracaoJogo {
  id: string;
  nome: string;
  ativo: boolean;
  multiplicadorBase: number;
  apostaMinimaPermitida: number;
  apostaMaximaPermitida: number;
}

export interface HistoricoJogo {
  id: string;
  usuarioId: string;
  jogoId: string;
  valorAposta: number;
  resultado: number;
  data: Date;
}