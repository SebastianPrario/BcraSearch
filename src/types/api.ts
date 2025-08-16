export interface Entidad {
    entidad: string
        situacion: number
        fechaSit1: string
        monto: number
        diasAtrasoPago: number
        refinanciaciones: boolean
        recategorizacionOblig: boolean
        situacionJuridica: boolean
        irrecDisposicionTecnica: boolean
        enRevision: boolean
        procesoJud: boolean
}

export interface ResultPageProps {
  data: Data;
  content: React.RefObject<HTMLDivElement | null > | null;
}
export interface Causales {
       nroCheque: number
        fechaRechazo: string
        monto: number
        fechaPago: string | null
        fechaPagoMulta: string | null
        estadoMulta: string
        ctaPersonal: boolean
        denomJuridica: string
        enRevision: boolean
        procesoJud: boolean
}
export interface Cheque {
  causal: string;
  entidades: {
    entidad: string;
    detalle: {
      nroCheque: number;
      fechaRechazo: string;
      monto: number;
      fechaPago: string | null;
      fechaPagoMulta: string | null;
      estadoMulta: string;
    }[];
  }[];
}

export interface ChequesRechazados {
  identificacion: number
  causales: Cheque[];
}

export interface Periodos {
    periodo: string
    entidades: [Entidad]
}

export interface Deuda {
    identificacion: string
    denominacion: string
    periodos: [Periodos]
    
}   
export interface Data {
    deuda?: Deuda | null
    chequesRechazados?: ChequesRechazados | null
}
