import axios from 'axios';
import React from 'react'
import type { Data } from '../../types/api'




export default function UseFech() {
    const [data, setData] = React.useState<Data | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>("");

    const getDataApi = async (url: string) => {
        try {
                return await axios.get(url);
            } catch (err: unknown) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const error = err as any;
                console.warn( error.message);
               
            }
        
    };

    const fetchData = async (cuit: string) => {
        const url = `${import.meta.env.VITE_API_URL_ENTIDADES}${cuit}`;
        const url2 = `${import.meta.env.VITE_API_URL_CHEQUESRECHAZADOS}${cuit}`;
        setLoading(true);
        setError("");
        setData(null);

        console.log(url, url2);
        try {
            // Ejecutamos la primera consulta
            const deudaPromise = getDataApi(url);
            const chequesPromise = getDataApi(url2);
          
            const [deudaResult, chequesRechazadosResult] = await Promise.allSettled([
                deudaPromise,
                chequesPromise
            ]);
          
            const newData: Data = {
                deuda: null,
                chequesRechazados: null
            };

            if (deudaResult.status === 'fulfilled') {
                newData.deuda = deudaResult.value?.data;
            }

            if (chequesRechazadosResult.status === 'fulfilled') {
                newData.chequesRechazados = chequesRechazadosResult.value?.data;
            }

            setData(newData);

            if (deudaResult.status === 'rejected' && chequesRechazadosResult.status === 'rejected') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const errorDeuda = (deudaResult.reason as any)?.message || "";
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const errorCheques = (chequesRechazadosResult.reason as any)?.message || "";
                console.error("Ambas consultas fallaron:", { errorDeuda, errorCheques });
                setError("Error al obtener los datos de BCRA. Por favor intente nuevamente.");
                setData({
                    deuda: null,
                    chequesRechazados: null
                });
            }

        } catch (err) {
            console.error("Error inesperado en fetchData:", err);
            setError("Error al procesar la solicitud");
        } finally {
            setLoading(false);
        }
    };

    return {
        data, setData, error, setError, loading, setLoading, fetchData
    }
}
