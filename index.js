const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/nft', express.static(path.join(__dirname, 'public', 'nft')));
app.use('/table', express.static(path.join(__dirname, 'public', 'table')));

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.send("Welcome to Arvr API");
});


app.get('/trex', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nft', 'index.html'));
});

app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'table', 'index.html'));
});

app.get('/chair', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chair', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
