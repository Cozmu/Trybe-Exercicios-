export interface IVehicle {
  drive(): void;
}

export interface IAirPlane {
  fly(): void;
}

export interface IVehicleFuturistic extends 
IVehicle, IAirPlane {}