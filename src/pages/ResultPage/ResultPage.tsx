import { StyledResultCard } from '../../components/styled-components'
import  { Card, Table } from 'react-bootstrap'
import type { Data } from '../../lib/hook/UseFech'


interface Entidad {
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
export default function ResultPage({data}: {data: Data }) {
  const { deuda , chequesRechazados} = data
  
  return (
    <Card>
      <StyledResultCard>
                  <div className="card-header">
                    <h5 className="mb-1">Resultado de la Consulta</h5>
                    <small>Información encontrada para el CUIT: {deuda?.identificacion}</small>
                  </div>
                  <div className="card-body">
                 
                    <div className="row mb-4">
                      <div className="col-md-12">
                        <div className="mb-0">
                          <strong>Razón Social:</strong>
                          <p className="text-muted mb-2">{deuda?.denominacion}</p>
                        </div>
                      </div>
                    </div>
                   <div className="">
                      <h6 className="fw-bold border-bottom">Entidades</h6>
                       <Table striped>
                        <thead className='text-center'>
                            <tr>
                            <th className='text-center'>Banco</th>
                            <th className='text-start'>Situación</th>
                            <th className='text-start'>Importe</th>
                            <th className='text-start'>Dias Atraso</th>
                            </tr>
                        </thead>

                        <tbody>
                            {deuda?.periodos[0].entidades.map((entidades: Entidad, index: number) => (
                            <tr key={index}>
                            <td>{entidades.entidad}</td>
                            <td className='text-center'>{entidades.situacion}</td>
                            <td className="text-end">{entidades.monto}</td>
                            <td className="text-center">{entidades.diasAtrasoPago}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                      <ul className="list-unstyled">
                      
                      </ul>
                    </div>
                  </div>
                </StyledResultCard>

        {chequesRechazados && chequesRechazados.causales.length > 0 && (
          <StyledResultCard className="card mt-4" >      
            <div className="card-header">
              <h5 className="mb-1">Cheques Rechazados</h5>
              <small>Información de cheques rechazados para el CUIT: {deuda?.identificacion}</small>
            </div>
            <div className="card-body" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <Table striped>
                <thead className='text-center'>
                  <tr>
                    <th>Motivo</th>
                    <th>Banco</th>
                    <th>Fecha Rechazo</th>
                    <th>Importe</th>
                    <th>Fecha Pago</th>
                    <th>Fecha Pago Multa</th>
                    <th>Estado Multa</th>
                  </tr>
                </thead>
                <tbody>
                  {chequesRechazados.causales.map((cheque, index) =>
                    cheque.entidades.map((detalle, idx) =>
                      detalle.detalle.map((d, i) => (
                        <tr key={`${index}-${idx}-${i}`}>
                          <td>{cheque.causal}</td>
                          <td>{detalle.entidad}</td>
                          <td>{d.fechaRechazo}</td>
                          <td className="text-end">{d.monto}</td>
                          <td>{d.fechaPago ? d.fechaPago : 'N/A'}</td>
                          <td>{d.fechaPagoMulta ? d.fechaPagoMulta : 'N/A'}</td>
                          <td>{d.estadoMulta}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </StyledResultCard>
        )}
    </Card>)
}
