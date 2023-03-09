const unitsArea = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

const convertArea = (valor: number, base: string, convercao: string): number => {
  const convercaoNumero = unitsArea.indexOf(base);
  const baseNumero = unitsArea.indexOf(convercao);
  const exponent = baseNumero - convercaoNumero;

  return valor * Math.pow(100, exponent);
}