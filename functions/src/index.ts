import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
const api = express();
api.use(cors());
api.get("/", (req, res) => res.status(200).send("Hello World..."));

exports.app = functions.https.onRequest(api);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
