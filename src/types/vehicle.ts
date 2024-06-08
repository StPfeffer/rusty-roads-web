interface Vehicle {
  id: string,
  name: string,
  initialMileage: number,
  currentMileage: number,
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