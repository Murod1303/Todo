import { CLEAR, SET_TOKEN } from "./tokenType";

const initialToken = {
  token: "",
};
export const tokenReducer = (state = initialToken, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};
