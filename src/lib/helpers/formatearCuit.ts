export const formatearCuit = (valor: string | number | null | undefined): string => {
  if (valor === null || valor === undefined) return "";
  
  const str = String(valor);
  const numeros = str.replace(/\D/g, "");
  const limitado = numeros.slice(0, 11);
  
  if (limitado.length >= 2) {
    let formateado = limitado.slice(0, 2);
    if (limitado.length > 2) {
      formateado += "-" + limitado.slice(2, 10);
    }
    if (limitado.length > 10) {
      formateado += "-" + limitado.slice(10);
    }
    return formateado;
  }

  return limitado;
};