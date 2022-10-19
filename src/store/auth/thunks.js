import { checkingCredentials } from "./authSlice";

export const checkingAuth = (email, password) => {
  console.log({ email, password });
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
