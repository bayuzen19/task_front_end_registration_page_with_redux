import axios from "axios";

export const registerUser = (userData) => {
  return (dispatch) => {
    axios.post("https://reqres.in/api/register", userData)
      .then((response) => {
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "REGISTER_FAILURE",
          payload: error.response.data.error,
        });
      });
  };
};
