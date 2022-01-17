const firebase = require('../firebase');
const arrayToObject = require('../format/json.formatter');
const firestore = firebase.firestore();

async function addColumn(req, res) {
    const column = req.body;

    if (!column.id ||
        !column.type ||
        !column.taskIds) {
        return res.status(400).json({
            error: 'Missing Required Column Property...'
        })
    }
    firestore.collection('columns').doc().set(column);
    return res.status(201).json(column)
}

async function getAllColumns(res) {
    try {
        const columns = firestore.collection('columns');
        const data = await columns.get();
        let taskIds = [];
        let columnsObject = [];
        if (data.empty) {
            res.status(404).json({
                error: 'No Column Record Found...'
            })
        } else {
            data.forEach(doc => {
                const columns = {
                    id: doc.id,
                    'type': doc.data().type,
                    'taskIds': doc.data().taskIds
                };
                columnsObject.push(columns);
            });
            //console.log(arrayToObject(columnsObject, 'id'));
            res.json(arrayToObject(columnsObject, 'id'));
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getColumn(req, res) {
    try {
        const id = req.params.id;
        const column = firestore.collection('columns').doc(id);
        const data = await column.get();
        if (!data.exists) {
            res.status(404).json({
                ERROR: 'Column Not Found...'
            })
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function updateColumn(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        const column = firestore.collection('columns').doc(id);
        await column.update(data);
        res.send('Column Record Update Successfully...')
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function deleteColumn(req, res) {
    try {
        const id = req.params.id;
        await firestore.collection('columns').doc(id).delete();
        res.send('Column Record Deleted Successfully...')
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addColumn,
    getAllColumns,
    getColumn,
    updateColumn,
    deleteColumn
}