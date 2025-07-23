import { StyledResultCard } from '../../components/styled-components'
import  {  Card, Table } from 'react-bootstrap'
import { formatearImporte } from '../../lib/helpers/formaterImporte'
import { total } from '../../lib/helpers/importeTotal'
import type  {  ResultPageProps, Entidad } from '../../types/api'



export default function ResultPage ({data, content}: ResultPageProps) {
  const { deuda , chequesRechazados} = data
  
  return (
   
    <div ref={content}>
    <Card style={{ borderRadius: '15px',  border: 'none' }}>
      <StyledResultCard className="card">
                  <div className="card-header">
                    <small>Información encontrada para la CUIT: {deuda?.identificacion}</small>
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
                      <h6 className="fw-bold ">Central de Deudores del Sistema Financiero</h6>
                       <Table striped>
                        <thead className='text-center'>
                            <tr>
                            <th className='text-start'>Entidad</th>
                            <th className='text-start'>Situación</th>
                            <th className='text-center'>Monto</th>
                            <th className='text-start'>Dias de Atraso</th>
                            </tr>
                        </thead>

                        <tbody>
                            {deuda?.periodos[0].entidades.map((entidades: Entidad, index: number) => (
                            <tr key={index}>
                            <td>{entidades.entidad}</td>
                            <td className='text-center'style={{ color: entidades.situacion === 1 ? 'green' : 'red' }}>{entidades.situacion}</td>
                            <td className="text-end">{formatearImporte(entidades.monto*1000)}</td>
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

        {chequesRechazados?.causales === undefined ? 
          (<StyledResultCard className="card mt-4">
            <div className="card-header">
              <h5 className="mb-1">Información de Cheques Rechazados para la CUIT: {deuda?.identificacion}</h5>
             
            </div>
            <div className="card-body">
              <p className="text-muted mb-2">No se encontraron cheques rechazados para la CUIT: {deuda?.identificacion}</p> 
            </div> 
          </StyledResultCard>)
          : (
          <StyledResultCard className="card mt-4" >      
            <div className="card-header">
              <h5 className="mb-1">Información de Cheques Rechazados para la CUIT: {deuda?.identificacion}</h5>
              <small className='me-2'>Importe Total en Cheques Rechazados: <b>{formatearImporte(total(chequesRechazados).total)}</b></small>
              <small>Cantidad de Cheques Rechazados: <b>{total(chequesRechazados).cantidad}</b> cheques</small>
            </div>
            <div className="card-body" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <Table responsive striped bordered hover  size="sm" style={{ tableLayout: 'fixed' }}>
                <thead className='text-center'>
                  <tr>
                    <th style={{ width: '15%' }}>Motivo</th>
                    <th style={{ width: '12%' }}>Numero</th>
                    <th style={{ width: '15%' }}>Fecha Rechazo</th>
                    <th style={{ width: '18%' }}>Importe</th>
                    <th style={{ width: '15%' }}>Fecha Pago</th>
                    <th style={{ width: '15%' }}>Fecha Pago Multa</th>
                    <th style={{ width: '12%' }}>Estado Multa</th>
                    </tr>
                </thead>
                <tbody>
                  {chequesRechazados?.causales.map((cheque, index) =>
                    cheque.entidades.map((entidad, idx) =>
                      entidad.detalle.map((d, i) => (
                        <tr  className='text-end' key={`${index}-${idx}-${i}`}>
                          <td>{cheque.causal}</td>
                          <td className='text-end'>{d.nroCheque}</td> 
                          <td>{d.fechaRechazo}</td>
                          <td className="text-end">{formatearImporte(d.monto)}</td>
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
    </Card>
    </div>
  )
}
