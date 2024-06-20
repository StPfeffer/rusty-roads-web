"use server";

import { RouteService } from "@/services/RouteService";

const routeService = new RouteService();

export const updateRoute = async (id: string, data: Partial<Route>): Promise<ActionResponse> => {
  try {
    await routeService.update(id, data);

    return { success: { message: "Route updated successfully" } };
  } catch (error: any) {
    return { error: { message: error.response?.data?.error?.message || error.message } };
  }
};
