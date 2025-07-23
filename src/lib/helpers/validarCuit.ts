export const validarCuit = (cuit: string) => {
    const cuitLimpio = cuit.replace(/[-\s]/g, "")
    if (cuitLimpio.length !== 11 || !/^\d+$/.test(cuitLimpio)) {
      return false
    }
    return true
  }