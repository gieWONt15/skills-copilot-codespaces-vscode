// create web server
// import express module
const express = require('express');
// import the comments array from the data.js file
const { comments } = require('./data');
// create an express application
const app = express();
// set the port for the server
const port = 4001;
// get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});