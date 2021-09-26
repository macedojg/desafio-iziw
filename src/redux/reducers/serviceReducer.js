import { ActionTypes } from "../actions/action-types";

const initialState = {
  services: [],
};

export const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SERVICES:
      return { ...state, services: payload };
    default:
      return state;
  }
};

export const selectedServiceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_SERVICE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_SERVICE:
      return {}; //return vazio = delete
    default:
      return state;
  }
};
