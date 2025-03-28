const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for specific static subdirectories
const staticRoutes = [
    'nft', 'table', 'plastic-chair', 'modern-arm', 'steel-frame', 'chair', 'cabinet', 'coffee-table'
];

staticRoutes.forEach(route => {
    app.use(`/${route}`, express.static(path.join(__dirname, 'public', route)));
});

// API welcome route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Arvr API" });
});

// Serve HTML files for each specific route
app.get('/trex', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nft', 'index.html'));
});

app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'table', 'index.html'));
});

app.get('/chair', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chair', 'index.html'));
});

app.get('/plastic-chair', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'plastic-chair', 'index.html'));
});

app.get('/modern-arm', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'modern-arm', 'index.html'));
});

app.get('/steel-frame', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'steel-frame', 'index.html'));
});

app.get('/cabinet', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cabinet', 'index.html'));
});

app.get('/coffee-table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'coffee-table', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
