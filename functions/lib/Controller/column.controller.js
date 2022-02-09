"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColumn = exports.updateColumn = exports.getAllColumns = exports.addColumn = void 0;
const firebase_1 = require("../Config/firebase");
async function addColumn(req, res) {
    const { type, taskIds } = req.body;
    try {
        const columns = firebase_1.db.collection("columns").doc();
        const columnObject = {
            id: columns.id,
            type,
            taskIds,
        };
        await columns.set(columnObject);
        res.status(200).send({
            status: "Success",
            message: "Column Added Successfully...",
            data: columnObject,
        });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}
exports.addColumn = addColumn;
async function getAllColumns(req, res) {
    try {
        const allColumns = [];
        const querySnapshot = await firebase_1.db.collection("columns").get();
        querySnapshot.forEach((doc) => {
            allColumns.push(doc.data());
        });
        return res.status(200).json(allColumns);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.getAllColumns = getAllColumns;
async function updateColumn(req, res) {
    const { body: { type, taskIds }, params: { id } } = req;
    try {
        const column = firebase_1.db.collection("columns").doc(id);
        const currentColumn = (await column.get()).data() ||
            {};
        const columnObject = {
            id: id,
            type: type || currentColumn.type,
            taskIds: taskIds || currentColumn.taskIds
        };
        await column.set(columnObject)
            .catch((error) => {
            return res.status(400).json({
                status: "Error",
                message: error.message,
            });
        });
        return res.status(200).json({
            status: "success",
            message: "Column Updated Successfully...",
            data: columnObject,
        });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.updateColumn = updateColumn;
async function deleteColumn(req, res) {
    const { id } = req.params;
    try {
        const column = firebase_1.db.collection("columns").doc(id);
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
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.deleteColumn = deleteColumn;
//# sourceMappingURL=column.controller.js.map