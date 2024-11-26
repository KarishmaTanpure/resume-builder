import { CLEAR_PROFILE, PROFILE } from "../../Constants/constant";

const initialState = {
  Data: {}
};

const profileReducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case PROFILE:
        return {
          ...state,
          Data: action.payload,
        };
      case CLEAR_PROFILE:
        return {
          ...state,
          Data: {},  
        };
      default:
        return state;
    }
  }
  return state;  // 
};

export default profileReducer;  
