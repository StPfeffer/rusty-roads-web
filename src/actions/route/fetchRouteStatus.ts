"use server";

import { RouteStatusService } from "@/services/RouteStatusService";

const routeStatusService = new RouteStatusService();

export const fetchRoutesStatuses = async (): Promise<ActionResponse> => {
  try {
    const statuses = await routeStatusService.listStatus();

    return { success: { message: "", data: statuses.data.status as Route[] } };
  } catch (error: any) {
    console.log(error);
    return { error: { message: "An error occurred when trying to search for routes status, please try again later", data: [] } };
  }

};

export const fetchRouteStatus = async (statusId: string): Promise<ActionResponse> => {
  try {
    const status = await routeStatusService.findStatusById(statusId);

    return { success: { message: "", data: status.data as RouteStatus } };
  } catch (error: any) {
    return { error: { message: "An error occurred when trying get the route status, please try again later", data: null } };
  }

};
