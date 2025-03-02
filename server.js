const express = require('express');
const path = require('path');
const app = express();

const PORT = 80;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
