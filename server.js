// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Директория для завантажених файлів

// Публічний доступ до файлів
app.use(express.static('uploads'));

// Отримуємо список файлів
app.get('/files', (req, res) => {
    fs.readdir('uploads', (err, files) => {
        if (err) {
            res.status(500).send('Error reading files');
            return;
        }
        res.json(files);
    });
});

// Завантаження файлів
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    res.redirect('/upload.html');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
