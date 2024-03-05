import { CLEAR, USER_INFO } from "./userType";

const initialUser = {
  userinfo: {},
};

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userinfo: action.payload,
      };
    case CLEAR:
      return {
        ...state,
        userinfo : {}
      };
    default:
      return state;
  }
};
