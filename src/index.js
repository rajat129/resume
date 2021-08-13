import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
// import store from './store'; 
import firebase from "firebase";
import { reduxFirestore, getFirestore ,createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import rootReducer from './Reducer/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'firebase/firestore';
import 'firebase/auth';
import { composeWithDevTools} from 'redux-devtools-extension';

var firebaseConfig = {
  apiKey: "AIzaSyDoPSzFU1Y-VFEfHWzlyhsQYsUCFsMLKWI",
  authDomain: "resume-builder-e34d3.firebaseapp.com",
  projectId: "resume-builder-e34d3",
  storageBucket: "resume-builder-e34d3.appspot.com",
  messagingSenderId: "499308539024",
  appId: "1:499308539024:web:2bcaa5d42028184ee07c15"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reduxStore = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase)
  )
);




ReactDOM.render(
  <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider firebase={firebase} config={firebaseConfig} dispatch={reduxStore.dispatch} createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

