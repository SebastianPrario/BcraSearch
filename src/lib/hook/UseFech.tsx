import axios from 'axios';
import React from 'react'

interface ChequesRechazados {
       entidad: number
       detalle: [
              {
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
       ]
}

interface Entidades {
    entidad: string
    situacion: number
    monto: number
    enRevision: boolean
    procesoJud: boolean
}
interface Periodos {
    periodo: string
    entidades: [Entidades]
}

interface Deuda {
    identificacion: string
    denominacion: string
    periodos: Periodos
    
}   
export interface Data {
    deuda: Deuda
    chequesRechazados: ChequesRechazados
}
export default function UseFech() {
    const [data, setData] = React.useState< any | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");
  
   
    const fetchData = async (cuit :string) => {
        const url = `https://api.bcra.gob.ar/CentralDeDeudores/V1.0/Deudas/${cuit}`;
        const url2 = `https://api.bcra.gob.ar/CentralDeDeudores/V1.0/Deudas/ChequesRechazados/${cuit}`;
        try{
        setLoading(true)
        const response  = await axios(url);
        if (!response) { 
            setError("Error al obtener los datos");
            setLoading(false);
            return;
        }
        setData({ deuda : response.data.results } );
        setLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Error al obtener los datos");
            setLoading(false);
        }
        try {
            const response2 = await axios(url2);
            if (!response2) {
                setError("Error al obtener los cheques rechazados");
                setLoading(false);
                return;
            }
            setData((prevData: any) => ({
                ...prevData,
                chequesRechazados: response2.data.results
            }));
            setLoading(false);
        } catch (err) {
             setData((prevData: any) => ({
                ...prevData,
                chequesRechazados: []
            }));
            setError("Error al obtener los cheques rechazados");
            setLoading(false);
        }
       
    }


    console.log("data", data);
  return  {
    data,error, loading ,fetchData}
}
