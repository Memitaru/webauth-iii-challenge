require('dotenv').config();

const server = require('./api/server')

const PORT = process.env.PORT || 5000;

server.isten(PORT, () => console.log(`Server running on ${PORT}`))