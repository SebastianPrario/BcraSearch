import { useState, useCallback } from 'react';
import axios from 'axios';
import type { Data } from '../types/api';

interface UseBcraDataReturn {
  data: Data | null;
  loading: boolean;
  error: string;
  fetchData: (cuit: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

export const useBcraData = (): UseBcraDataReturn => {
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
        axios.get(urlDeuda),
        axios.get(urlCheques)
      ]);

      const newData: Data = {
        deuda: null,
        chequesRechazados: null
      };

      let hasError = true;

      if (deudaResult.status === 'fulfilled') {
        newData.deuda = deudaResult.value.data.results;
        hasError = false;
      }

      if (chequesResult.status === 'fulfilled') {
        newData.chequesRechazados = chequesResult.value.data.results;
        hasError = false;
      }

      if (hasError) {
        setError("No se pudieron obtener los datos. Verifique el CUIT e intente nuevamente.");
      } else {
        setData(newData);
      }

    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Ocurrió un error inesperado al consultar los datos.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData, setLoading, setError };
};
