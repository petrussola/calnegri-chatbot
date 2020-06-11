// dependencies
const express = require('express');

// helpers
const config = require('./config');
const bot = require('./bot');

// instantiate express
const server = express();

// middleware
server.use(express.json());

// endpoints

// test endpoint
server.get('/', (req, res) => {
	res.status(200).json({ message: 'ok' });
});

server.post(`/${process.env.TELEGRAM_TOKEN}`, (req, res) => {
	bot.processUpdate(req.body);
	res.sendStatus(200);
});

server.listen(config.port, () => {
	console.log(`\n\n Server listening on port ${config.port}\n\n`);
});
