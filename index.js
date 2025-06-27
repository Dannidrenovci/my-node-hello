const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello from your Express.js app!');
});

// Example: A future route to add a user (we'll build this out later)
app.post('/api/users/add', (req, res) => {
  const newUser = req.body; // This is where the user data from your frontend would be
  console.log('Received new user:', newUser);
  res.status(201).send('User addition endpoint reached (not yet implemented fully)');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});