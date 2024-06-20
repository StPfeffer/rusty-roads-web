"use server";

import { RouteService } from "@/services/RouteService";

const routeService = new RouteService();

export const deleteRoute = async (routeId: string): Promise<ActionResponse> => {
  try {
    await routeService.delete(routeId);

    return { success: { message: "Route deleted successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
