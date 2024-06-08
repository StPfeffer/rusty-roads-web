"use server";

import { StateService } from "@/services/StateService";

const stateService = new StateService();

export const fetchStates = async (): Promise<State[]> => {
  try {
    const states = await stateService.list();

    return states.data.states as State[];
  } catch (error) {
    console.log(error);

    return [];
  }

};

export const fetchState = async (id: string): Promise<State> => {
  try {
    const state = await stateService.findById(id);

    return state.data as State;
  } catch (err) {
    console.log(err);

    throw new Error("Não foi possível encontrar o estado!");
  }

};
