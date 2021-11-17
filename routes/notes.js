const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend
} = require('../helpers/utils');
const fs = require('fs');

notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  });

notes.post("/", (req, res) => {
    const { id, title, text } = req.body;
  
    if (req.body) {
      const newID = uuidv4();
      console.log(newID);
      const newNote = {
        id: newID,
        title,
        text,
      };
      readAndAppend(newNote, "./db/db.json");
      res.json(`New note created!`);
    } else {
      res.error(`Failed to create note!`);
    }
  });

///////////////////////

// // Required
// const notes = require("express").Router();
// const { v4: uuidv4 } = require("uuid");
// const {
//   deleteNote,
//   readFromFile,
//   writeToFile,
//   readAndAppend,
// } = require("../helpers/utils");

// // Route for retrieving notes

// notes.get("/", (req, res) => {
//   readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
// });

// // Route for posting notes

// notes.post("/", (req, res) => {
//   const { id, title, text } = req.body;

//   if (req.body) {
//     const newID = uuidv4();
//     console.log(newID);
//     const newNote = {
//       id: newID,
//       title,
//       text,
//     };
//     readAndAppend(newNote, "./db/db.json");
//     res.json(`New note created!`);
//   } else {
//     res.error(`Failed to create note!`);
//   }
// });