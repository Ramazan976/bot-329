const TelegramBot = require('node-telegram-bot-api');

// Botun API tokenini daxil edin
const token = '8077100286:AAEFAdaex2sNUcFlcZt_VTQ3zwA_Tzn2PcQ';

// Botu polling rejimində başlatmaq
const bot = new TelegramBot(token, {polling: true});

// /start komandasını idarə edən funksiya
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Salam! Mənim Telegram botuma xoş gəlmisiniz.');
});

// /help komandasını idarə edən funksiya
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Bu botun əsas komandaları: /start və /help.');
});

// Hər hansı bir mesaj gəldikdə, eyni mesajı geri göndərən funksiya
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Bot yalnız /start və /help komandalarını xüsusi idarə edir
  if (!text.startsWith('/')) {
    bot.sendMessage(chatId, `Siz dediniz: ${text}`);
  }
});

process.on('uncaughtException', (err) => {
  console.error('Gözlənilməz xəta:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Əlçatmayan vəd:', reason);
});
