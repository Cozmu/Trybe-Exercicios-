import { IVehicle } from "./interfaces";
 
export default class Car implements IVehicle {
  drive(): void {
    console.log('Dirigindo...');
  }
}