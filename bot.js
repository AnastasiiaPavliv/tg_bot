const TelegramBot = require('node-telegram-bot-api');

// Замініть 'YOUR_BOT_TOKEN' на реальний токен вашого бота
const token = '6533331775:AAGL3SbIf41RJ39KBi0CBWRZQ_mZvToG72M'

// ID користувача, на якого ви хочете пересилати повідомлення
const toUserId = ['541560601']; // Замініть на ID цільового користувача

// Створення бота
const bot = new TelegramBot(token, { polling: true });

// Обробка текстових повідомлень від користувачів
bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const text = msg.text;

    // Перевірка, чи це команда для бота
    if (text.startsWith('/start')) {
        bot.sendMessage(chatId, 'Вітаю! Я готовий отримувати від вас новини, фото, відео та повідомлення. Просто надішліть їх мені.');
    } else {
        // Відправка повідомлення до цільового користувача
        toUserId.forEach((toUserId)=>{
        bot.forwardMessage(toUserId, chatId, msg.message_id)
            .then(() => {
                bot.sendMessage(chatId, 'Ваше повідомлення було надіслано.');
            })
            .catch((error) => {
                console.error(`Помилка при пересиланні повідомлення: ${error.message}`);
            });
        })
    }
});

// Обробка фото та відео
bot.on('photo', (msg) => {
    handleMedia(msg, 'фото');
});

bot.on('video', (msg) => {
    handleMedia(msg, 'відео');
});

function handleMedia(msg, mediaType) {
    const chatId = msg.chat.id;

    // Відправка медіа до цільового користувача
    toUserId.forEach((toUserId)=>{
    bot.forwardMessage(toUserId, chatId, msg.message_id)
        .then(() => {
            bot.sendMessage(chatId, `Ваше ${mediaType} було надіслано.`);
        })
        .catch((error) => {
            console.error(`Помилка при пересиланні ${mediaType}: ${error.message}`);
        });
    })
}

console.log('Бот запущений');

