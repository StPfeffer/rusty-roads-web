interface Vehicle {
  id: string,
  name: string,
  initialMileage: number,
  actualMileage: number,
  document: VehicleDocument,
  createdAt: string,
  updatedAt: string,
}

interface VehicleDocument {
  id: string,
  chassisNumber: string,
  exerciseYear: number,
  modelYear: number,
  manufactureYear: number,
  registrationNumber: string,
  color: string,
  make: string,
  model: string,
  plate: string,
  updatedAt: string,
  vehicleId: string,
}

interface CreateVehicleData {
  vehicle: {
    name: string,
    initialMileage: string | number,
  };
  document: {
    chassisNumber: string,
    exerciseYear: string | number,
    modelYear: string | number,
    manufactureYear: string | number,
    registrationNumber: string,
    color: string,
    make: string,
    model: string,
    plate: string,
  };
}