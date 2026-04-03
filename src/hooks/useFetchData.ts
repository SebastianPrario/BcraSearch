import axios, { AxiosError } from 'axios';
import { useState, useCallback } from 'react';
import type { Data, Deuda, ChequesRechazados, BcraResponse } from '../types/api';

export interface FetchDataReturn {
    success: boolean;
    showModal: boolean;
    isConnectionError: boolean;
    errorMsg: string;
}

export const useFetchData = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchData = useCallback(async (cuit: string): Promise<FetchDataReturn> => {
        const urlDeuda = `${import.meta.env.VITE_API_URL_ENTIDADES}${cuit}`;
        const urlCheques = `${import.meta.env.VITE_API_URL_CHEQUESRECHAZADOS}${cuit}`;
        
        setLoading(true);
        setError("");
        setData(null);

        let isConnectionError = false;
        let showModal = false;
        let success = false;
        let errorMsg = "";

        try {
            const [deudaResult, chequesResult] = await Promise.allSettled([
                axios.get<BcraResponse<Deuda>>(urlDeuda),
                axios.get<BcraResponse<ChequesRechazados>>(urlCheques)
            ]);

            const newData: Data = {
                deuda: null,
                chequesRechazados: null
            };

            const is404 = (result: PromiseSettledResult<any>) => 
                result.status === 'rejected' && (result.reason as AxiosError)?.response?.status === 404;

            if (deudaResult.status === 'fulfilled') {
                const response = deudaResult.value.data;
                if (response.status === 200) {
                    newData.deuda = response.results;
                    success = true;
                    showModal = true;
                }
            }

            if (chequesResult.status === 'fulfilled') {
                const response = chequesResult.value.data;
                if (response.status === 200) {
                    newData.chequesRechazados = response.results;
                    success = true;
                    showModal = true;
                }
            }

            setData(newData);

            // Si ambas fallaron o devolvieron error
            if (deudaResult.status === 'rejected' && chequesResult.status === 'rejected') {
                const both404 = is404(deudaResult) && is404(chequesResult);
                
                if (both404) {
                    errorMsg = "No se encontró información para el CUIT ingresado.";
                    showModal = true;
                } else {
                    errorMsg = "Hubo un error al comunicarse con la base de BCRA";
                    isConnectionError = true;
                    showModal = false;
                    console.error("Ambas consultas fallaron:", {
                        deuda: deudaResult.reason,
                        cheques: chequesResult.reason
                    });
                }
            } else if (!success) {
                // Una fue exitosa pero no trajo 200, o una 404 y la otra exitosa vacía
                errorMsg = "No se encontró información para el CUIT ingresado.";
                showModal = true;
            }

            setError(errorMsg);
            return { success, showModal, isConnectionError, errorMsg };

        } catch (err) {
            console.error("Error inesperado en fetchData:", err);
            const msg = "Error al procesar la solicitud";
            setError(msg);
            return { success: false, showModal: false, isConnectionError: true, errorMsg: msg };
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
