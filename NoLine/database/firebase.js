import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyClUvR3dTnBzmjHKPFEwqCLY9IIY_xaUZY",
  authDomain: "noline-293103.firebaseapp.com",
  databaseURL: "https://noline-293103.firebaseio.com",
  projectId: "noline-293103",
  storageBucket: "noline-293103.appspot.com",
  messagingSenderId: "271554712581",
  appId: "1:271554712581:web:cc23e3486bf289b9e4b86c",
  measurementId: "G-9LPM2YM5EX"
}
// AIzaSyCjh1JMtJsM_3EKSxgq1ayPjvWA3ZNodjs
firebase.initializeApp(config);
firebase.firestore().settings({ experimentalForceLongPolling: true });

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, db, auth, storage};
