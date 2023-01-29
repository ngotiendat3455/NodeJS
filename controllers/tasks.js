const getAllTasks=(req, res)=>{
    console.log('handle somethin')
    res.send('get all tasks')
}

const createTask=(req, res)=>{
    console.log('handle somethin')
    res.send('create task')
}

const getTask=(req, res)=>{
    console.log('handle somethin')
    res.send('get all task')
}

const updateTask=(req, res)=>{
    console.log('handle somethin')
    // res.send('update task')
    res.json({
        id: req.params.id
    })
}

const deleteTask=(req, res)=>{
    console.log('handle somethin')
    // res.send('delete task')
    res.json({
        id: req.params.id
    })
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }
  