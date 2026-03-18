// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const total = (chequesRechazados: any) => {
  let totalValue = 0;
  let cantidadValue = 0;
  
  if (chequesRechazados?.causales) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (chequesRechazados.causales as any[]).forEach((cheque: any) => {
      if (cheque.entidades) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (cheque.entidades as any[]).forEach((entidad: any) => {
          if (entidad.detalle) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (entidad.detalle as any[]).forEach((d: any) => {
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