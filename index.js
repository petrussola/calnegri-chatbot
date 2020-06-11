// dependencies
const express = require('express');
require('dotenv').config();

// instantiate express
const server = express();

// middleware
server.use(express.json());

// endpoints
server.get('/', (req, res) => {
	res.status(200).json({ message: 'ok' });
});

const port = process.env.PORT;

server.listen(port, () => {
	console.log(`\n\n Server listening on port ${port}\n\n`);
});
