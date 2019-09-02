const express = require('express');
const Data = require('./data/db.js');
const server = express();
server.use(express.json());

//POST insert()
server.post('/api/users', (req, res) => {
    const addUsers = req.body;
    console.log('addUser', addUsers)
    Data.insert(addUsers)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

//GET find()
server.get('/api/users', (req, res) => {
    Data.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json({ message: 'error getting the list of user'})
    })
})


//GET findById()

//DELETE  remove()
server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    Data.remove(id)
    .then(user => {
        res.status(200).json({ message: 'user deleted'})
    })
    .catch(error => {
        res.status(500).json({ error: 'error removing the hub'})
    })
})

//PUT update()
server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const change = req.body;
    Data.update(id, change)
    .then(update => {
        if(update) {
            res.status(200).json(update)
        } else {
            res.status(404).json({ message: 'user not fond'})
        }
        
    })
    .catch(error => {
        res.status(500).json({ error: 'error updating the hub'})
    })
})


const port = 8000;
server.listen(port, () => console.log('api running'))