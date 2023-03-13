const unitsMassa = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMassa = (valor: number, base: string, convercao: string): number => {
  const baseNumero = unitsMassa.indexOf(base);
  const convercaoNumero = unitsMassa.indexOf(convercao);
  const exponent = convercaoNumero - baseNumero;

  return valor * Math.pow(10, exponent);
}

