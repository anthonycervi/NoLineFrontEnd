import firebase from 'firebase';
import config from "./firebase.config.json";

firebase.initializeApp(config);
firebase.firestore().settings({ experimentalForceLongPolling: true });

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, db, auth, storage};
