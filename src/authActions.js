export const signin = (user) => {   
    // console.log("ghere");
    return (dispatch,getState , {getFirebase ,getFirestore}) => {

        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.pass
        );

        dispatch({type:"SIGNIN" , payload : user})

    }
    
}

export const login = (user) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        console.log("here1");
        dispatch({type : "SIGNIN" , payload : user});

        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(user.email,user.pass);
    }
}

export const signOut = () => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut();
    }
}

