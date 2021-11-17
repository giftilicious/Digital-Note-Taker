const express = require('express');
const notesRouter = require('./notes');
const app = require('express').Router();

app.use("/notes", notesRouter);


module.exports = app;

