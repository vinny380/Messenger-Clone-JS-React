import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCRlVDHBLYNgyAm5xIELLpysK57c5y9SDw",
    authDomain: "messenger-clone-60fa3.firebaseapp.com",
    databaseURL: "https://messenger-clone-60fa3.firebaseio.com",
    projectId: "messenger-clone-60fa3",
    storageBucket: "messenger-clone-60fa3.appspot.com",
    messagingSenderId: "20609325190",
    appId: "1:20609325190:web:b5859d04739af213a71907",
    measurementId: "G-0EQ9GBZ296"

});

const db = firebaseApp.firestore();

export default db;
