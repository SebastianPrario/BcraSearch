import type { ChequesRechazados } from '../../types/api';

export const total = (chequesRechazados: ChequesRechazados | null | undefined) => {
  let totalValue = 0;
  let cantidadValue = 0;
  
  if (chequesRechazados?.causales) {
    chequesRechazados.causales.forEach((causal) => {
      if (causal.entidades) {
        causal.entidades.forEach((entidad) => {
          if (entidad.detalle) {
            entidad.detalle.forEach((d) => {
              totalValue += d.monto;
              cantidadValue += 1;
            });
          }
        });
      }
    });
  }
  
  return { total: totalValue, cantidad: cantidadValue };
};