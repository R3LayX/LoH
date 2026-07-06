const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve specific pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/letters', (req, res) => {
  res.sendFile(path.join(__dirname, 'letters.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✨ A Letter of Hope — server running at http://0.0.0.0:${PORT}`);
});