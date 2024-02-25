import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import { Build } from './models/Build.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));

// Static files and catch-all route should be defined after API routes

// Catch-all handler for serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
