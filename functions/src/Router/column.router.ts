import express = require("express");
import { 
    addColumn, 
    deleteColumn, 
    getAllColumns, 
    updateColumn 
} from "../Controller/column.controller";

const router = express.Router();
router.post("/column", addColumn);
router.get("/columns", getAllColumns);
router.put("/column/:id", updateColumn);
router.delete("/column/:id", deleteColumn);

export {
    router
}