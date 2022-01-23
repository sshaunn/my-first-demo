import * as express from "express";
import { getColumnOrder, updateColumnOrder } from "../Controller/columnOrder.controller";

const router = express.Router();
router.get("/columnOrder", getColumnOrder);
router.put("/columnOrder/:id", updateColumnOrder);

export {
    router
}