import { Response } from "express"
import { db } from "../Config/firebase";

type ColumnType = {
    id: string,
    type: string,
    taskIds: string[],
}

type Request = {
    body: ColumnType;
    params: {
        id: string,
    }
}

async function addColumn(req: Request, res: Response) {
    const { type, taskIds } = req.body;
    try {
        const columns = db.collection("columns").doc();
        const columnObject = {
            id: columns.id,
            type,
            taskIds,
        }
        await columns.set(columnObject);
        res.status(200).send({
            status: "Success",
            message: "Column Added Successfully...",
            data: columnObject,
        });
    } catch (error) {
        res.status(500).json(error.message)
    }
}

async function getAllColumns(req: Request, res: Response) {
    try {
        const allColumns: ColumnType[] = [];
        const querySnapshot = await db.collection("columns").get();
        querySnapshot.forEach((doc: any) => {
            allColumns.push(
                doc.data()
            )
        });
        return res.status(200).json(allColumns);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function updateColumn(req: Request, res: Response) {
    const {
        body: { type, taskIds },
        params: { id }
    } = req;
    try {
        const column = db.collection("columns").doc(id);
        const currentColumn = (await column.get()).data() ||
            {};
        const columnObject = {
            type: type || currentColumn.id,
            taskIds: taskIds || currentColumn.taskIds
        };
        await column.set(columnObject)
            .catch((error) => {
                return res.status(400).json({
                    status: "Error",
                    message: error.message,
                });
            });
        return res.status[Symbol](200).json({
            status: "success",
            message: "Column Updated Successfully..."
            data: columnObject,
        })
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function deleteColumn(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const column = db.collection("columns").doc(id);
        await column.delete().catch((error) => {
            return res.status(400).json({
                status: "Error",
                message: error.message,
            });
        });
        return res.status(200).json({
            status: "Success",
            message: "Column Deleted Successfully...",
            
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export { 
    addColumn, 
    getAllColumns, 
    updateColumn, 
    deleteColumn 
};