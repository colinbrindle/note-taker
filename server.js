// Importing express.js and Node.js path library
const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.info(`${req.method} to home page received`);

    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    console.info(`${req.method} to notes page received`);

    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/*', (req, res) => {
    console.info(`${req.method} to home page received`);

    res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 👺`));