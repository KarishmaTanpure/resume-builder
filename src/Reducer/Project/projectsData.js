import { PROJECTS, CLEAR_PROJECTS, MODIFY_PROJECTS_COUNT } from "../../Constants/constant";

const initialState = {
  Data: [{ projectName: null, techStack: null, description: null }],
  Count: 1
};


const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS:
      return {
        ...state,
        Data: action.payload,
      };
    case MODIFY_PROJECTS_COUNT:
      return {
        ...state,
        Count: action.payload,
      };
    case CLEAR_PROJECTS:
      return {
        ...state,
        Data: [], 
        Count: 0, 
      };
    default:
      return state;
  }
};

export default projectsReducer; 
