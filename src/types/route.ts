interface Route {
  id: string,
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
}

interface RouteStatus {
  id: string,
  code: string,
  description: string
}