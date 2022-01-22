import * as express from "express";
import { addTask, deleteTask, getAllTasks, updateTask } from "../Controller/task.controller";
//import { addEntry, getAllEntries } from "../Controller/task.controller";
const router = express.Router();
//router.post("/task", addTask);
router.post("/task", addTask);
router.get("/tasks", getAllTasks);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export {
    router
}