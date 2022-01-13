const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const taskRouter = require('./router/task.router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(taskRouter.router);

app.listen(config.port, () => {
    console.log(`Listening on ${config.port}`)
});
