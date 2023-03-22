import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import Quadra from "./Quadra";

class QuadraFutebol extends Quadra {
  constructor(
    private _quadraRegras: IFutebol
  ) { super() }

  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data,
      regras: this._quadraRegras as unknown as IFutebol
    }
  }
}

export default QuadraFutebol