const express = require('express');
const connectDB = require('../nodejs/db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB("mongodb+srv://vivekbhatt272:EdlzGpwFczVHCeNT@cluster0.s1uzjcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('../nodejs/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
