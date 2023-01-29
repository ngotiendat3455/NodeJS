const express = require('express');
const { createTask, deleteTask, getAllTasks, getTask, updateTask} = require('../controllers/tasks');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;