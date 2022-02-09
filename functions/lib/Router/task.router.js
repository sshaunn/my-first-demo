"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = __importStar(require("express"));
const task_controller_1 = require("../Controller/task.controller");
//import { addEntry, getAllEntries } from "../Controller/task.controller";
const router = express.Router();
exports.router = router;
//router.post("/task", addTask);
router.post("/task", task_controller_1.addTask);
router.get("/tasks", task_controller_1.getAllTasks);
router.put("/task/:id", task_controller_1.updateTask);
router.delete("/task/:id", task_controller_1.deleteTask);
//# sourceMappingURL=task.router.js.map