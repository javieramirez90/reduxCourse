import firebase from "firebase";
// tu info key
let firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function login(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(snap => snap.user);
}
