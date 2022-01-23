import { Response } from "express"
import { db } from "../Config/firebase";

type ColumnOrder = {
    id: string,
    columnOrder: string[]
}
type Request = {
    body: ColumnOrder,
    params: {
        id: string
    }
}


async function getColumnOrder(req: Request, res: Response) {
    try{
        let order: ColumnOrder["columnOrder"] = [];
        const querySnapshot = await db.collection("columnOrder").get();
        querySnapshot.forEach((doc: any) => {
            order = doc.data().columnOrder;
        });
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

async function updateColumnOrder(req: Request, res: Response) {
    const {
        body: { columnOrder },
        params: { id }
    } = req;
    try {
        const columnOrderObject = db.collection("columnOrder").doc(id);
        const currentColumnOrder = (await columnOrderObject.get()).data() ||
            {};
        const newColumnOrderObject = {
            id: id,
            columnOrder: columnOrder || 
                currentColumnOrder.columnOrder
        };
        await columnOrderObject.set(newColumnOrderObject)
            .catch((error) => {
                return res.status(400).json({
                    status: "Error",
                    message: error.message,
                });
            });
        return res.status(200).json({
            status: "success",
            message: "ColumnOrder Updated Successfully...",
            data: columnOrderObject
        })
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export {
    getColumnOrder,
    updateColumnOrder
}