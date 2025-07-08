require('dotenv').config();
const express = require('express');
const cors = require('cors');

const usersRoute = require('./routes/users');
const welcomeRoute = require('./routes/send-welcome');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', usersRoute);
app.use('/send-welcome', welcomeRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

