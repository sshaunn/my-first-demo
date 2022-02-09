import * as admin from "firebase-admin";
//import * as functions from "firebase-functions";
import serviceAccount from "./service_account.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-local-a695e.firebaseio.com",
    storageBucket: "fir-local-a695e.appspot.com"
})
const db = admin.firestore();

export {admin, db};