const unitsVolume = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

const convertVolume  = (valor: number, base: string, convercao: string): number => {
  const baseNumero = unitsVolume.indexOf(base);
  const convercaoNumero = unitsVolume.indexOf(convercao);
  const exponent = convercaoNumero - baseNumero;

  return valor * Math.pow(1000, exponent);
}