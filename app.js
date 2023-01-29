require('./db/connect')
const express = require('express');
const taskRouter = require('./routes/task')
const app = express();

app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

app.listen(5000, () =>
console.log(`Server is listening on port 5000...`)
);
// app