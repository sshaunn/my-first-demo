const express = require('express');
const {
    getColumnOrder,
    updateColumnOrder
} = require('../controller/columnOrder.controller')


const router = express.Router();
router.get('/columnOrder', getColumnOrder);
router.put('/columnOrder/:id', updateColumnOrder);

module.exports = {
    router
}