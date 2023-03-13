const unidadesDistancia = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertDistancia = (valor: number, base: string, convercao: string): number => {
  const baseNumero = unidadesDistancia.indexOf(base); 
  const convercaoNumero = unidadesDistancia.indexOf(convercao);
  const exponent = convercaoNumero - baseNumero; 

  return valor * Math.pow(10, exponent);
} 
