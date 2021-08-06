import { initialState } from "../initialState";

function contactReducer(state = initialState.contactDetails ,action){
    if(action.type=="SET_CONTACT"){
        return action.payload;
    }
    return state;
}

export default contactReducer;