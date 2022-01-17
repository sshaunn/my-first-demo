const firebase = require('../firebase');
const firestore = firebase.firestore();
const arrayToObject = require('../format/json.formatter');


const addTask = async (req, res) => {
    try {
        const data = req.body;
        firestore.collection('tasks').doc().set(data);
        res.send('New Task saved successfully...');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = firestore.collection('tasks');
        const data = await tasks.get();
        let tasksArray = [];
        if (data.empty) {
            res.status(404).send('No task record found...');
        } else {

            data.forEach(doc => {

                const task = {
                    id: doc.id,
                    'taskName': doc.data().taskName,
                    'taskType': doc.data().taskType,
                    'status': doc.data().status
                };
                tasksArray.push(task);
            });

            //console.log(tasksObject(tasksArray, 'id'));
            res.send(arrayToObject(tasksArray, 'id'));
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = firestore.collection('tasks').doc(id);
        const data = await task.get();
        if (!data.exists) {
            res.status(404).send('Task not found...');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const task = firestore.collection('tasks').doc(id);
        await task.update(data);
        res.send('Task record updated successfully...');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('tasks').doc(id).delete();
        res.send('Record deleted successfully...');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
}