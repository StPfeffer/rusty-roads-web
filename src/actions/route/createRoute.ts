"use server"


import { RouteService } from "@/services/RouteService";

const routeService = new RouteService();

export const createRoute = async (routeData: CreateRouteData): Promise<ActionResponse> => {
  try {
    const route = await routeService.create(routeData.route);

    const routeId: string = route.data.id;

    return { success: { message: "Route created successfully" } }
  } catch (error: any) {
    return { error: { message: error.message } };
  }

};