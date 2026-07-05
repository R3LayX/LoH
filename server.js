const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Fall through to index.html for SPA-like navigation (Express 5 syntax)
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✨ A Letter of Hope — server running at http://0.0.0.0:${PORT}`);
});