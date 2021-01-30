const data = require('../data/index')

const getAllUsers = (req,res) => {
    res.json(data)
}

const getUsersById = (req,res) => {
    let id = req.params.id - 1;
    if (data[id] === undefined){
        res.status(400).send("UserId does not exist.")
    } else {
        res.json(data[id])
    }
}

const postNewUser = (req,res) => {
    let newUser = req.body
    newUser.id = data.length + 1;
    res.json(newUser)
}

const updateUserById = (req,res) => {
    let id = req.params.id;
    if (data[id - 1] === undefined){
        res.status(400).send("UserId does not exist.")
    } else {
        data[id] = req.body;
        data[id].id = id
        res.json(data[id])
    }
}

const deleteUserById = (req, res) => {
    let id = req.params.id 
    if (data[id - 1] === undefined){
        res.status(400).send("UserId does not exist.")
    } else {
        data.splice(id, 1)
        res.json(`User ${id} has been deleted`)
    }
}

module.exports = { 
    getAllUsers,getUsersById,postNewUser,updateUserById,deleteUserById}
