  export const total = (chequesRechazados: any) => {
    let total = 0;
    let cantidad = 0
    {chequesRechazados?.causales.map((cheque: { entidades: any[] }) =>
                    cheque.entidades.map((entidad) =>
                      entidad.detalle.map((d: any) => {
                        total += d.monto
                        cantidad += 1
                      })
                    )
                  )}
    return {total, cantidad}
  }