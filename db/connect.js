const connectionString = `mongodb+srv://superadmin:superadmin@nodeexpressprojects.st1t5vh.mongodb.net/03-task-manager?retryWrites=true&w=majority`;

const mongoose = require('mongoose');

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connect success'))
    .catch(()=> console.log('Connect fail'))