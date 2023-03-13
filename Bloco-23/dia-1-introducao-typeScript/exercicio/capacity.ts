const unidadeLitro = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertLitro = (valor: number, base: string, convercao: string): number => {
  const baseNumero = unidadeLitro.indexOf(base);
  const convercaoNumero = unidadeLitro.indexOf(convercao);
  const exponent = convercaoNumero - baseNumero;

  return valor * Math.pow(10, exponent);
}

