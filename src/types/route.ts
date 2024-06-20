interface Route {
  id: string,
  startedAt: string,
  endedAt: string,
  totalDistance: number,
  createdAt: string,
  updatedAt: string,
  initialLat: number,
  initialLong: number,
  finalLat: number,
  finalLong: number,
  driverId: string,
  driver: Driver,
  statusId: string,
  status: RouteStatus,
  initialAddressId: string,
  finalAddressId: string,
  vehicleId: string,
  vehicle: Vehicle
}

interface RouteStatus {
  id: string,
  code: string,
  description: string
}

interface CreateRouteData {
  route: {
    started_at: string,
    ended_at: string,
    total_distance: number,
    created_at: string,
    updated_at: string,
    initial_lat: number,
    initial_long: number,
    final_lat: number,
    final_long: number,
    driver: Driver,
    status: RouteStatus,
    initialAddress: Address,
    finalAddress: Address,
    vehicle: Vehicle,
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