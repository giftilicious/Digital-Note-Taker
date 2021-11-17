const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index.js')
// const { readFromFile, writetoFile, readAndAppend } = require('./helpers/utils');
const util = require('util');
// const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', api);

// Get route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Get route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// // Get route for db.json
// app.get('/api/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, '/db/db.json'))
// );

// Post route for db.json




// Post route for notes page
// API POST request to add a note
// app.post('/notes', (req, res) => {
//     // Log that a POST request was received
//     console.info(`${req.method} request received to add a note`);

//     const { title, text } = req.body;

//     if (req.body) {
//         const newNote = [{
//             title,
//             text,
//         }];

//     const noteString = JSON.stringify(newNote);

//     // fs.writeFile(`./db/${newNote}.json`, noteString, (err) =>
//     fs.writeFile(`./db/db.json`, noteString, (err) =>
//         err ? console.error(err) : console.log(`Review for ${newNote} has been written to JSON file`)
//     );

//     const response = {
//         status: 'success',
//         body: newNote,
//     };

//     console.log(response);
//     res.status(201).json(response);

//     } else {
//         res.error('Error in adding note');
//     }
// });

// const readFromFile = util.promisify(fs.readFile);
// /**
//  *  Function to write data to the JSON file given a destination and some content
//  *  @param {string} destination The file you want to write to.
//  *  @param {object} content The content you want to write to the file.
//  *  @returns {void} Nothing
//  */
// const writeToFile = (destination, content) =>
//     fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//         err ? console.error(err) : console.info(`\nData written to ${destination}`)
//     );
// /**
//  *  Function to read data from a given a file and append some content
//  *  @param {object} content The content you want to append to the file.
//  *  @param {string} file The path to the file you want to save to.
//  *  @returns {void} Nothing
//  */
// const readAndAppend = (content, file) => {
//     fs.readFile(file, './db/db.json', (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const parsedData = JSON.parse(data);
//             parsedData.push(content);
//             writeToFile(file, parsedData);
//         }
//     });
// };


// // // API GET request for notes
// // app.get('/api/notes', (req, res) => {
// //     // Send a message to the client
// //     res.json(`${req.method} request received to get notes`);
// //     // Log our request to the terminal
// //     console.info(`${req.method} request received to get notes`);
// // });




// app.listen(PORT, () =>
//     console.log(`App listening on http://localhost:${PORT}!`)
// );

// ///////////////
// // CT...

// // save the new notes received
// app.post("/api/notes",(req,res)=>{
//     // verify that the POST was received
//     // res.json(`${req.method} request received /api/notes`);
//     // console.info(`${req.method} request received /api/notes`);

//     let addNote = req.body;
//     let noteList = JSON.parse(fs.readFileSync("./db/db.json"));
//     let noteLength = (noteList.length).toString();
//     addNote.id = noteLength;
//     // push update notes
//     noteList.push(addNote)
    
//     fs.writeFileSync("./db/db.json",JSON.stringify(noteList));
//     res.json(noteList)
// })

// // delete notes from the app
// app.delete("/api/notes/:id",(req,res)=>{
//     // verify that the DELET was received
//     res.json(`${req.method} request received /api/notes/:id`);
//     console.info(`${req.method} request received /api/notes/:id`);
    
//     let noteList = JSON.parse(fs.readFileSync("./db/db.json"));
//     let noteID = (req.params.id).toString();

//     noteList = noteList.filter(selected => selected.id != noteID)

//     // update notes data
//     fs.writeFileSync("./db/db.json",JSON.stringify(noteList));
//     res.json(noteList)
// })

// // listening to the port when deployed 
// app.listen(PORT, () => console.log(`Listening Server on PORT ${PORT}`))




// /////////////////
// // copy/paste files from 11-Express > 28-Stu_Mini-Project > Main

// // const express = require('express');
// // const path = require('path');
// // const api = require('./routes/index.js');

// // const PORT = process.env.port || 3000;

// // const app = express();


// // // Middleware for parsing JSON and urlencoded form data
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use('/api', api);
// // app.use(express.static('public'));

// // // GET Route for homepage
// // app.get('/', (req, res) =>
// //   res.sendFile(path.join(__dirname, '/public/index.html'))
// // );

// // // GET Route for feedback page
// // app.get('/feedback', (req, res) =>
// //   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// // );

// // // Wildcard route to direct users to a 404 page
// // app.get('*', (req, res) =>
// //   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// // );

// // app.listen(PORT, () =>
// //   console.log(`App listening at http://localhost:${PORT} 🚀`)
// // );

