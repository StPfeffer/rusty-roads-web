"use server";

import { RouteService } from "@/services/RouteService";

const routeService = new RouteService();

export const fetchRoutesStatuses = async (): Promise<ActionResponse> => {
  try {
    const statuses = await routeService.listStatus();

    return { success: { message: "", data: statuses.data.routes as Route[] } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying to search for routes, please try again later", data: [] } };
  }

};

export const fetchRouteStatus = async (statusId: string): Promise<ActionResponse> => {
  try {
    const status = await routeService.findStatusById(statusId);

    return { success: { message: "", data: status.data as RouteStatus } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the route, please try again later", data: null } };
  }

};
