const TelegramBot = require('node-telegram-bot-api');

// Підставте свій токен бота з BotFather
const token = '6533331775:AAGL3SbIf41RJ39KBi0CBWRZQ_mZvToG72M';

// Створіть об'єкт бота
const bot = new TelegramBot(token, { polling: true });

// Обробка повідомлень
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text.toString();

    if (text === 'Привіт!') {
        bot.sendMessage(chatId, 'Привіт, я твій бот!');
    }
});
