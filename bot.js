//     const TelegramBot = require('node-telegram-bot-api');
//
// // Замініть 'YOUR_BOT_TOKEN' на реальний токен вашого бота
//     const token = '6533331775:AAGL3SbIf41RJ39KBi0CBWRZQ_mZvToG72M';
//
// // Створення бота
//     const bot = new TelegramBot(token, { polling: true });
//
// // ID користувача, на якого ви хочете переадресувати повідомлення
//     const toUserId = '541560601'; // Замініть на ID користувача, на якого ви хочете переадресувати повідомлення
//
// // Обробка повідомлень від користувачів
//     bot.on('message', (msg) => {
//         const chatId = msg.chat.id;
//         const userMessage = msg.text;
//         const text = msg.text.toString();
//         if (text === '/start'){
//         bot.sendMessage(chatId, `Привіт, ${msg.from.first_name}, зі мною ти можеш поділитись новинами!`);
// }
//         const userLink = `<a href="tg://user?id=${chatId}">${msg.from.first_name}</a>`;
//         const messageWithLink = `Повідомлення від ${userLink}:\n${userMessage}`;
//
//         // Відправка повідомлення з HTML-розміткою
//         if (text !== '/start') {
//             bot.sendMessage(toUserId, messageWithLink, {parse_mode: 'HTML'})
//                 .then(() => {
//                     console.log(`Повідомлення переадресовано користувачу з ID: ${toUserId}`);
//                 })
//                 .catch((error) => {
//                     console.error(`Помилка при переадресації повідомлення: ${error.message}`);
//                 });
//         }
//     });
//
//     console.log('Бот запущений');

// const TelegramBot = require('node-telegram-bot-api');
//
// // Замініть 'YOUR_BOT_TOKEN' на реальний токен вашого бота
// const token = '6533331775:AAGL3SbIf41RJ39KBi0CBWRZQ_mZvToG72M';
//
// // Створення бота
// const bot = new TelegramBot(token, { polling: true });
//
// // ID користувача, на якого ви хочете переадресувати повідомлення
// const toUserId = '541560601'; // Замініть на ID користувача, на якого ви хочете переадресувати повідомлення
//
// // Обробка повідомлень від користувачів
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const userMessage = msg.text;
//
//     // Визначення імені користувача
//     const userName = msg.from.first_name || 'Анонімний користувач';
//
//     const userLink = `<a href="tg://user?id=${chatId}">${userName}</a>`;
//     const messageWithLink = `Повідомлення від ${userLink}:\n${userMessage}`;
//
//     // Відправка повідомлення з HTML-розміткою
//     bot.sendMessage(toUserId, messageWithLink, { parse_mode: 'HTML' })
//         .then(() => {
//             console.log(`Повідомлення переадресовано користувачу з ID: ${toUserId}`);
//         })
//         .catch((error) => {
//             console.error(`Помилка при переадресації повідомлення: ${error.message}`);
//         });
// });
//
// // Обробка фото, відео, документів та посилань
// bot.on('photo', (msg) => {
//     handleMedia(msg, 'фото');
// });
//
// bot.on('video', (msg) => {
//     handleMedia(msg, 'відео');
// });
//
// bot.on('document', (msg) => {
//     handleMedia(msg, 'документ');
// });
//
// bot.on('text', (msg) => {
//     const chatId = msg.chat.id;
//     const userMessage = msg.text;
//
//     // Регулярний вираз для пошуку посилань у тексті
//     const linkRegex = /https?:\/\/[^\s]+/g;
//
//     // Знаходимо всі посилання у тексті
//     const links = userMessage.match(linkRegex);
//
//     if (links && links.length > 0) {
//         links.forEach((link) => {
//             const userLink = `<a href="tg://user?id=${chatId}">${userName}</a>`;
//             const linkMessage = `Посилання від ${userLink}:\n${link}`;
//
//             // Відправляємо посилання до цільового користувача
//             bot.sendMessage(toUserId, linkMessage, { parse_mode: 'HTML' })
//                 .then(() => {
//                     console.log(`Посилання переадресовано користувачу з ID: ${toUserId}`);
//                 })
//                 .catch((error) => {
//                     console.error(`Помилка при переадресації посилання: ${error.message}`);
//                 });
//         });
//     }
// });
//
// function handleMedia(msg, mediaType) {
//     const chatId = msg.chat.id;
//
//     // Визначення імені користувача
//     const userName = msg.from.first_name || 'Анонімний користувач';
//
//     const userLink = `<a href="tg://user?id=${chatId}">${userName}</a>`;
//     const messageWithLink = `${mediaType} від ${userLink}:\n`;
//
//     if (mediaType === 'photo') {
//         const fileId = msg.photo[msg.photo.length - 1].file_id;
//         bot.sendPhoto(toUserId, fileId, { caption: messageWithLink, parse_mode: 'HTML' })
//             .then(() => {
//                 console.log(`${mediaType} переадресовано користувачу з ID: ${toUserId}`);
//             })
//             .catch((error) => {
//                 console.error(`Помилка при переадресації ${mediaType}: ${error.message}`);
//             });
//     } else if (mediaType === 'video') {
//         const fileId = msg.video.file_id;
//         bot.sendVideo(toUserId, fileId, { caption: messageWithLink, parse_mode: 'HTML' })
//             .then(() => {
//                 console.log(`${mediaType} переадресовано користувачу з ID: ${toUserId}`);
//             })
//             .catch((error) => {
//                 console.error(`Помилка при переадресації ${mediaType}: ${error.message}`);
//             });
//     } else {
//         console.error(`Помилка: не підтримується тип медіа - ${mediaType}`);
//     }
// }
// console.log('Бот запущений');

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

