import { CLEAR, USER_INFO } from "./userType";

export const userInfo = (userData) => {
  return {
    type: USER_INFO,
    payload: userData,
  };
};

export const clearuser = () => {
  return {
    type: CLEAR,
    payload: "",
  };
};
