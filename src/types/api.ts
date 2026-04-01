export interface Entidad {
  entidad: string;
  situacion: number;
  fechaSit1: string;
  monto: number;
  diasAtrasoPago: number;
  refinanciaciones: boolean;
  recategorizacionOblig: boolean;
  situacionJuridica: boolean;
  irrecDisposicionTecnica: boolean;
  enRevision: boolean;
  procesoJud: boolean;
}

export interface ChequeDetalle {
  nroCheque: number;
  fechaRechazo: string;
  monto: number;
  fechaPago: string | null;
  fechaPagoMulta: string | null;
  estadoMulta: string;
  ctaPersonal: boolean;
  denomJuridica: string;
  enRevision: boolean;
  procesoJud: boolean;
}

export interface ChequeCausal {
  causal: string;
  entidades: {
    entidad: string | number;
    detalle: ChequeDetalle[];
  }[];
}

export interface ChequesRechazados {
  identificacion: number | string;
  denominacion: string;
  causales: ChequeCausal[];
}

export interface Periodos {
  periodo: string;
  entidades: Entidad[];
}

export interface Deuda {
  identificacion: string;
  denominacion: string;
  periodos: Periodos[];
}

export interface BcraResponse<T> {
  status: number;
  results: T;
}

export interface Data {
  deuda?: Deuda | null;
  chequesRechazados?: ChequesRechazados | null;
}

export interface ResultPageProps {
  data: Data;
  content: React.RefObject<HTMLDivElement | null> | null;
}
