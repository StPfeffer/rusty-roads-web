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
  initialAddress: Address,
  finalAddressId: string,
  finalAddress: Address,
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
    driver_id: string,
    vehicle_id: string,
  };
}