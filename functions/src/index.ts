import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
//import { router as taskRouter } from "./Router/task.router";
import { router as taskRouter } from "./Router/task.router";
import { router as columnRouter } from "./Router/column.router";
// import { 
    
//     updateEntry,
//     deleteEntry 
// } from "./Controller/task.controller";

const api = express();
api.use(cors());
api.get("/", (req, res) => res.status(200).send("Hello World..."));
api.use("/", taskRouter);
api.use("/", columnRouter);
// api.patch('/entries/:entryId', updateEntry)
// api.delete('/entries/:entryId', deleteEntry)


exports.api = functions.https.onRequest(api);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
