import { useState, useEffect } from 'react';
import type { Data } from '../../types/api';

export interface HistoryItem {
  cuit: string;
  denominacion: string;
  data: Data;
  timestamp: number;
}

const HISTORY_KEY = 'bcra_search_history';
const MAX_HISTORY = 5;

export const useSearchHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_KEY);
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Error parsing history from localStorage', e);
      }
    }
  }, []);

  const addToHistory = (cuit: string, denominacion: string, data: Data) => {
    setHistory((prev) => {
      // Remove existing item with same CUIT if it exists
      const filtered = prev.filter((item) => item.cuit !== cuit);
      
      const newItem: HistoryItem = {
        cuit,
        denominacion,
        data,
        timestamp: Date.now(),
      };

      const updated = [newItem, ...filtered].slice(0, MAX_HISTORY);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  return { history, addToHistory, clearHistory };
};
