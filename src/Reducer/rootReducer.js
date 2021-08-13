import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import experienceReducer from "./experienceReducer";

const rootReducer = combineReducers({
    firestore : firestoreReducer,
    firebase : firebaseReducer,
    auth : authReducer,
    document : documentReducer,
    contact : contactReducer,
    education : educationReducer,
    experience : experienceReducer,
})

export default rootReducer;