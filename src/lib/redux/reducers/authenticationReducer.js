import { GOOGLE_LOGIN, EMAIL_PASSWORD_LOGIN } from "../../constants/constant";

const initialState = {
  isLoggedIn: false,
  userData: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        isLoggedIn: true,
        userData: action.payload,
      };
    case EMAIL_PASSWORD_LOGIN:
      return {
        isLoggedIn: true,
        userData: { profileObj: { name: action.payload.email } },
      };
    default:
      return state;
  }
};


export default authenticationReducer;
