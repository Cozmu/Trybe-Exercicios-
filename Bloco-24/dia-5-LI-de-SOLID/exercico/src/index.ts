import CepService from './EX1/CepService';
import FooCepAPI from './EX1/FooCepAPI';
import MockAPI from './EX1/MokAPI';

async function main() {
  const mockApi = new MockAPI()
  const cepSvcComMock = new CepService(mockApi);
  const cepApi = new FooCepAPI();
  const cepSvc = new CepService(cepApi);

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();