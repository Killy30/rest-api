

const clrt = {}

clrt.getData = (req, res) =>{
    res.json({data:'get all data'})
}

clrt.postData = (req, res) =>{
    res.json({data:'the data has been created successfully'})
}

clrt.putData = (req, res) =>{
    res.json({data:'the data has been edited'})
}

clrt.deleteData = (req, res) =>{
    res.json({data:'the data has been deleted'})
}

module.exports = clrt