require('dotenv').config();

const config = {
	token: process.env.TELEGRAM_TOKEN,
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	baseUrl: process.env.BASE_URL,
};

module.exports = config;
