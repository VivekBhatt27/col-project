// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create Express app
const app = express();

// Configure body-parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://vivekbhatt272:EdlzGpwFczVHCeNT@cluster0.s1uzjcs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define User schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// Define POST route for user registration
app.post('../nodejs/register.js', async (req, res) => {
    try {
        // Extract registration data from request body
        const { firstName, lastName, email, password } = req.body;

        // Check if user already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Return success message
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Registration failed.' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("MongoDB connected")
});
