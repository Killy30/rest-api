const mongoose = require('mongoose')

const config = async ()=>{
    try {
        const db = await mongoose.connect("mongodb://localhost/tasks");
        console.log('db is connected ', db.connection.name);
    } catch (error) {
        console.log('an error has occurred ==> ',error);
    }
}

config()