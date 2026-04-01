import axios from 'axios';
import { useState, useCallback } from 'react';
import type { Data, Deuda, ChequesRechazados, BcraResponse } from '../types/api';

export const useFetchData = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchData = useCallback(async (cuit: string) => {
        const urlDeuda = `${import.meta.env.VITE_API_URL_ENTIDADES}${cuit}`;
        const urlCheques = `${import.meta.env.VITE_API_URL_CHEQUESRECHAZADOS}${cuit}`;
        
        setLoading(true);
        setError("");
        setData(null);

        try {
            const [deudaResult, chequesResult] = await Promise.allSettled([
                axios.get<BcraResponse<Deuda>>(urlDeuda),
                axios.get<BcraResponse<ChequesRechazados>>(urlCheques)
            ]);

            const newData: Data = {
                deuda: null,
                chequesRechazados: null
            };

            if (deudaResult.status === 'fulfilled') {
                const response = deudaResult.value.data;
                if (response.status === 200) {
                    newData.deuda = response.results;
                }
            }

            if (chequesResult.status === 'fulfilled') {
                const response = chequesResult.value.data;
                if (response.status === 200) {
                    newData.chequesRechazados = response.results;
                }
            }

            setData(newData);

            // Si ambas fallaron o devolvieron error
            if (deudaResult.status === 'rejected' && chequesResult.status === 'rejected') {
                setError("Error al obtener los datos de BCRA. Por favor intente nuevamente.");
                console.error("Ambas consultas fallaron:", {
                    deuda: deudaResult.reason,
                    cheques: chequesResult.reason
                });
            } else if (!newData.deuda && !newData.chequesRechazados) {
                // Si ninguna trajo datos útiles (ej: 404 o status != 200 en ambas)
                setError("No se encontró información para el CUIT ingresado.");
            }

        } catch (err) {
            console.error("Error inesperado en fetchData:", err);
            setError("Error al procesar la solicitud");
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        data, 
        setData, 
        error, 
        setError, 
        loading, 
        setLoading, 
        fetchData
    };
};

export default useFetchData;
