const firebase = require("../firebase");
const firestore = firebase.firestore();

async function getColumnOrder(req, res) {
  try {
    const columnOrder = firestore.collection("columnOrder");
    const data = await columnOrder.get();
    let order = [];
    if (data.empty) {
      res.status(404).json({
        error: "No Column Record Found...",
      });
    } else {
      data.forEach((doc) => {
        const colorder = doc.data().columnOrder;
        order = colorder;
      });
      console.log(order);
      res.send(order);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
}

async function updateColumnOrder(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const columnOrder = firestore.collection("columnOrder").doc(id);
      await columnOrder.update(data);
      res.send("Column Record Update Successfully...");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

module.exports = {
    getColumnOrder,
    updateColumnOrder
};
