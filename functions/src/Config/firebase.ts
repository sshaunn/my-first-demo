import * as admin from "firebase-admin";
import { getStorage } from "firebase/storage";
//import * as functions from "firebase-functions";
import serviceAccount from "./service_account.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://first-demo.firebaseio.com",
    storageBucket: "first-demo-ec03c.appspot.com"
})
const db = admin.firestore();
const storage = admin.storage();
export {
    admin, 
    db,
    storage
};