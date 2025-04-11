const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.send(`File uploaded: <a href="/uploads/${req.file.filename}">${req.file.originalname}</a>`);
    } else {
        res.send('No file uploaded.');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
