import { initialState  } from "../initialState";

function experienceReducer(state = initialState.experience , action){
    if(action.type=="SET_EXP"){
        return action.payload;
    }
    return state;
}

export default experienceReducer;