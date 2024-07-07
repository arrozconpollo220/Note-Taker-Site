const router = require("express").Router(); 
const {readFromFile, readAndAppend} = require ("../db/readWrite");

//uuid to create unique id's
const {v4:uuidv4} = require("uuid");

//creating get routes
router.get("/", (req, res) => {
    readFromFile ("./db/db.json").then(data => res.json(JSON.parse(data)))
});

//creating post routes
router.post("/", (req, res) =>{
    const {title, text} = req.body
    //writting to "newNOte" with title, text and unique id
    const newNote = {title, text, id:uuidv4()}
    //read and appending "newNote" to db.json
    readAndAppend(newNote, "./db/db.json")
    // response back
    res.json("Note Added!")
});

//exporting router
module.exports = router