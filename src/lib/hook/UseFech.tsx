import axios from 'axios';
import React from 'react'
import type { Data  } from '../../types/api'




export default function UseFech() {
    const [data, setData] = React.useState<Data | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");
    
    const fetchData = async (cuit :string) => {
        const url = `${import.meta.env.VITE_API_URL_ENTIDADES}${cuit}`;
        const url2 = `${import.meta.env.VITE_API_URL_CHEQUESRECHAZADOS}${cuit}`;
        setLoading(true);
        setError("");
        setData(null)
      
        try{
        const [ deudaResult , chequesRechazadosResult ] = await Promise.allSettled([
            axios(url),
            axios(url2)
        ])
       
        if (deudaResult.status === 'fulfilled') {
            setData( { deuda: deudaResult.value.data.results , chequesRechazados: null })};
        if (chequesRechazadosResult.status === 'fulfilled') {
            setData((prevData) => ({
                ...prevData,
                chequesRechazados: chequesRechazadosResult.value.data.results
            }));
        }
        if (deudaResult.status === 'rejected' && chequesRechazadosResult.status === 'rejected') {
            setError("Error al obtener los datos de deuda");    
            setData({ 
                deuda:null,
                chequesRechazados: null})
        }
                     
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Error al obtener los datos");
            setLoading(false);
        }

       finally {
           setLoading(false);
       }
    }
  
  return  {
    data,error, setError, loading , setLoading, fetchData}
}
