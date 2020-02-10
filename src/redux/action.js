import axios from "axios";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const IS_LOGIN = "IS_LOGIN";
export const LOG_OUT = "LOG_OUT";

export const fetchSuccess = payload => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload
  };
};
export const fetchFail = payload => {
  return {
    type: FETCH_DATA_FAIL,
    payload
  };
};

export const fetchData = () => dispatch => {
  // console.log("Fetch Data called");
  axios
    .get("./data.json")
    .then(res => {
      dispatch(fetchSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchFail(error.message));
    });
};

export const isLogin = payload => ({
  type: IS_LOGIN,
  payload
});

export const logout = payload => ({
  type: LOG_OUT,
  payload
});
