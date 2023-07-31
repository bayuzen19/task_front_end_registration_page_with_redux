const initialState = {
    isRegistered: false,
    user: null,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_SUCCESS":
        return {
          ...state,
          isRegistered: true,
          user: action.payload,
          error: null,
        };
      case "REGISTER_FAILURE":
        return {
          ...state,
          isRegistered: false,
          user: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  