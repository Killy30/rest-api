const express = require("express")
const clrt = require('../controllers/index')
const router = express.Router()

module.exports = (app) =>{

    router.get('/get-data', clrt.getData)
    
    router.post('/create-data', clrt.postData)
    
    router.put('/edit-data', clrt.putData)
    
    router.delete('/delete-data', clrt.deleteData)

    app.use(router)
}