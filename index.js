const express = require('express');
const Data = require('./data/db.js');
const server = express();
server.use(express.json());

//POST

//GET
server.get('/api/users', (req, res) => {
    Data.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json({ message: 'error getting the list of user'})
    })
})


//GET

//DELETE

//PUT


const port = 8000;
server.listen(port, () => console.log('api running'))