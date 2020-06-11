// dependencies
const TelegramBot = require('node-telegram-bot-api');

// config
const config = require('./config');

let bot;

// initialise bot
if (config.env === 'production') {
	bot = new TelegramBot(config.token);
	bot.setWebHook(`${config.baseUrl}/${config.token}`);
	console.log(`\n\n Bot initialized in ${config.env} environment \n\n`);
} else {
	bot = new TelegramBot(config.token, { polling: true });
}

bot.on('message', (msg) => {
	const chatId = msg.chat.id;

	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, 'Received your message');
});

module.exports = bot;
