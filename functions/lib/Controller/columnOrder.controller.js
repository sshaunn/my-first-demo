"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateColumnOrder = exports.getColumnOrder = void 0;
const firebase_1 = require("../Config/firebase");
async function getColumnOrder(req, res) {
    try {
        let order = [];
        const querySnapshot = await firebase_1.db.collection("columnOrder").get();
        querySnapshot.forEach((doc) => {
            order = doc.data().columnOrder;
        });
        return res.status(200).json(order);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.getColumnOrder = getColumnOrder;
async function updateColumnOrder(req, res) {
    const { body: { columnOrder }, params: { id } } = req;
    try {
        const columnOrderObject = firebase_1.db.collection("columnOrder").doc(id);
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
        });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.updateColumnOrder = updateColumnOrder;
//# sourceMappingURL=columnOrder.controller.js.map