import { ActionTypes } from "./action-types";

export const setServices = (services) => {
  return {
    type: ActionTypes.SET_SERVICES,
    payload: services,
  };
};

export const selectedService = (service) => {
  return {
    type: ActionTypes.SELECTED_SERVICE,
    payload: service,
  };
};

export const removeSelectedService = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_SERVICE,
  };
};
