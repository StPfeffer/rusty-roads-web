"use server";

import { RouteService } from "@/services/RouteService";

const routeService = new RouteService();

export const fetchRoutes = async (): Promise<Route[]> => {
  try {
    const routes = await routeService.list();

    return routes.data.routes as Route[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchRoute = async (id: string): Promise<Route> => {
  try {
    const route = await routeService.findById(id);

    return route.data as Route;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar a rota!");
  }

};
