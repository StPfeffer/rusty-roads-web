"use server"


import { RouteService } from "@/services/RouteService";

const routeService = new RouteService();

export const createRoute = async (routeData: CreateRouteData): Promise<ActionResponse> => {
  try {
    const route = await routeService.create(routeData.route);

    return { success: { message: "Route created successfully" } }
  } catch (error: any) {
    return { error: { message: error.message } };
  }

};

export const createRandomRoute = async (routeData: CreateRouteData): Promise<ActionResponse> => {
  try {
    console.log(routeData);
    await routeService.createRandom(routeData.route);

    return { success: { message: "Route created successfully" } }
  } catch (error: any) {
    return { error: { message: error.message } };
  }

};