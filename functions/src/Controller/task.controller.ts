import { db } from "../Config/firebase";
import { Response } from "express";

type TaskType = {
    id: string;
    columnId?: string;
    taskName: string;
    taskType: string;
    status: boolean;
}

type Request = {
    body: TaskType;
    params: {
        id: string
    }
}


async function addTask(req: Request, res: Response) {
    const {columnId, taskName, taskType, status} = req.body;
    try {
        const tasks = db.collection("tasks").doc();
        const taskObject = {
            id: tasks.id,
            columnId,
            taskName,
            taskType,
            status
        }
        await tasks.set(taskObject);
        res.status(200).send({
            status: "success",
            message: "Task Added Successfully...",
            data: taskObject
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}
async function getAllTasks(req: Request, res: Response) {
    try {
        const allTasks: TaskType[] = [];
        const querySnapshot = await db.collection("tasks").get();
        querySnapshot.forEach((doc: any) => {
            allTasks.push(
                doc.data()
            )
        });
        return res.status(200).
            json(allTasks);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


async function updateTask(req: Request, res: Response) {
    const {
        body: { columnId, taskName, taskType, status },
        params: { id }
    } = req

    try {
        const task = db.collection("tasks").doc(id);
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
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const task = db.collection("tasks").doc(id);
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
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

export { addTask, getAllTasks, updateTask, deleteTask };



