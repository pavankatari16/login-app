const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Basic route to confirm server is running
app.get("/", (req, res) => {
  res.send("Login API running");
});
// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple authentication logic

  if (username === 'admin' && password === 'admin') {
    return res.status(200).json({
      success: true,
      username: username
    });
  } else {
    return res.status(401).json({
      message: 'Invalid credentials'
    });
  }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});