import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

  constructor(cepApi: FooCepAPI) {
    this.cepApi = cepApi; // mudar
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;