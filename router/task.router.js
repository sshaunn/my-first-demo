const express = require('express');
const {addTask, 
       getAllTasks, 
       getTask,
       updateTask,
       deleteTask
      } = require('../controller/task.controller');

const router = express.Router();

router.post('/task', addTask);
router.get('/tasks', getAllTasks);
router.get('/task/:id', getTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


module.exports = {
    router
}