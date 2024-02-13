const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST request to /login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication - you should implement proper authentication logic here
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password!');
    }
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
