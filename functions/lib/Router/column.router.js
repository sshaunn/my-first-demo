"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const column_controller_1 = require("../Controller/column.controller");
const router = express.Router();
exports.router = router;
router.post("/column", column_controller_1.addColumn);
router.get("/columns", column_controller_1.getAllColumns);
router.put("/column/:id", column_controller_1.updateColumn);
router.delete("/column/:id", column_controller_1.deleteColumn);
//# sourceMappingURL=column.router.js.map