"use server";

import { RouteService } from "@/services/RouteService";

const routeService = new RouteService();

export const fetchRoutes = async (): Promise<ActionResponse> => {
  try {
    const routes = await routeService.list();

    return { success: { message: "", data: routes.data.routes as Route[] } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying to search for routes, please try again later", data: [] } };
  }

};

export const fetchRoute = async (id: string): Promise<ActionResponse> => {
  try {
    const route = await routeService.findById(id);

    return { success: { message: "", data: route.data as Route } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the route, please try again later", data: null } };
  }

};
