import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDhGzvds7SCUET8_dV0IgYn5Asyxklj9Q0",
  authDomain: "linkedin-clone-2c10f.firebaseapp.com",
  projectId: "linkedin-clone-2c10f",
  storageBucket: "linkedin-clone-2c10f.appspot.com",
  messagingSenderId: "193123307770",
  appId: "1:193123307770:web:97711c5efe2ce77d0d7943",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth };
// export default db;
