import { CLEAR, SET_TOKEN } from "./tokenType";

export const settoken = (tokenData) => {
  return {
    type: SET_TOKEN,
    payload: tokenData,
  };
};

export const clearuser = () => {
  return {
    type: CLEAR,
    payload: "",
  };
};
