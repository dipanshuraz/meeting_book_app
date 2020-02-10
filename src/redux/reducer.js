import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  IS_LOGIN,
  LOG_OUT
} from "./action";

const initialState = {
  data: [],
  isAuth: false,
  email: "admin",
  pass: "admin"
};

const reducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isAuth: false,
        data: action.payload
      };
    case FETCH_DATA_FAIL:
      return {
        ...state
      };
    case IS_LOGIN:
      console.log(action.payload);
      if (
        action.payload.email == state.email &&
        action.payload.pass == state.pass
      ) {
        // console.log("Success");
        return {
          ...state,
          isAuth: true
        };
      } else {
        console.log("Wrong Credentials, try again");
      }
    case LOG_OUT:
      console.log(action.payload);
      return {
        ...state,
        isAuth: false
      };

    default:
      return state;
  }
};
export default reducer;
