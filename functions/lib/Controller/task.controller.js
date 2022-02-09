"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getAllTasks = exports.addTask = void 0;
const firebase_1 = require("../Config/firebase");
async function addTask(req, res) {
    const { columnId, taskName, taskType, status } = req.body;
    try {
        const tasks = firebase_1.db.collection("tasks").doc();
        const taskObject = {
            id: tasks.id,
            columnId,
            taskName,
            taskType,
            status
        };
        await tasks.set(taskObject);
        res.status(200).send({
            status: "success",
            message: "Task Added Successfully...",
            data: taskObject
        });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}
exports.addTask = addTask;
async function getAllTasks(req, res) {
    try {
        const allTasks = [];
        const querySnapshot = await firebase_1.db.collection("tasks").get();
        querySnapshot.forEach((doc) => {
            allTasks.push(doc.data());
        });
        return res.status(200).
            json(allTasks);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.getAllTasks = getAllTasks;
async function updateTask(req, res) {
    const { body: { columnId, taskName, taskType, status }, params: { id } } = req;
    try {
        const task = firebase_1.db.collection("tasks").doc(id);
        const currentTask = (await task.get()).data() ||
            {};
        const taskObject = {
            columnId: columnId ||
                currentTask.columnId,
            taskName: taskName ||
                currentTask.taskName,
            taskType: taskType ||
                currentTask.taskType,
            status: status ||
                currentTask.status,
        };
        await task.set(taskObject)
            .catch((error) => {
            return res.status(400).json({
                status: "Error",
                message: error.message,
            });
        });
        return res.status(200).json({
            status: "success",
            message: "Task updated Successfully...",
            data: taskObject,
        });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.updateTask = updateTask;
async function deleteTask(req, res) {
    const { id } = req.params;
    try {
        const task = firebase_1.db.collection("tasks").doc(id);
        await task.delete().catch((error) => {
            return res.status(400).json({
                status: "Error",
                message: error.message,
            });
        });
        return res.status(200).json({
            status: "Success",
            message: "Task Deleted Successfully..."
        });
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
}
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.controller.js.map