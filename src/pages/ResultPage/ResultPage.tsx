import React from 'react'
import { StyledResultCard, StyledStatusBadge } from '../../components/styled-components'
import  { Table } from 'react-bootstrap'
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
    <div>
        
       <StyledResultCard className="card">
                  <div className="card-header">
                    <h5 className="mb-1">Resultado de la Consulta</h5>
                    <small>Información encontrada para el CUIT: {deuda.identificacion}</small>
                  </div>
                  <div className="card-body">
                 
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <strong>Razón Social:</strong>
                          <p className="text-muted mb-2">{deuda.denominacion}</p>
                        </div>
                      </div>
                    </div>
                   <div className="mb-2">
                      <h6 className="fw-bold border-bottom pb-2 mb-3">Entidades</h6>
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

        {chequesRechazados && chequesRechazados.length > 0 && (
          <StyledResultCard className="card mt-4">      
            <div className="card-header">
              <h5 className="mb-1">Cheques Rechazados</h5>
              <small>Información de cheques rechazados para el CUIT: {deuda.identificacion}</small>
            </div>
            <div className="card-body">
              <Table striped>
                <thead className='text-center'>
                  <tr>
                    <th>Banco</th>
                    <th>Fecha Emisión</th>
                    <th>Importe</th>
                    <th>Motivo Rechazo</th>
                  </tr>
                </thead>
                <tbody>
                  {chequesRechazados.map((cheque, index) => (
                    <tr key={index}>
                      <td>{cheque.banco}</td>
                      <td>{cheque.fechaEmision}</td>
                      <td className="text-end">{cheque.importe}</td>
                      <td>{cheque.motivoRechazo}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            
            </StyledResultCard>
   
                )}
    </div>)
}
