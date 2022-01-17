const express = require('express');
const { 
    addColumn,
    getAllColumns,
    getColumn,
    updateColumn,
    deleteColumn
} = require('../controller/column.controller');

const router = express.Router();

router.post('/column', addColumn);
router.get('/columns', getAllColumns);
router.get('/column/:id', getColumn);
router.put('/column/:id', updateColumn);
router.delete('/column/:id', deleteColumn);


module.exports = {
    router
}