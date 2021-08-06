import { initialState } from "../initialState";

function educationReducer(state = initialState.educationDetails ,action){
    if(action.type=="SET_EDUCATION"){
        return action.payload;
    }
    return state;
}

export default educationReducer;