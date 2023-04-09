const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile, } = require('../helpers/fsUtils');

//http://localhost:3001/api/notes/
api.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
});