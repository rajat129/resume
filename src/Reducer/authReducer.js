import { initialState } from "../initialState";

function authReducer(state=initialState.auth ,action){
    console.log("hereeeeeee");
    if(action.type == "SIGNIN"){
        console.log("inside reduceer");
        return action.payload;
    }
    return state;
}

export default authReducer;