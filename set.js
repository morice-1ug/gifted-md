// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://apis.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.myDb = "https://giftedmd.giftedtech.web.id"; // DO NOT Change this...
global.ytdl = "https://youtube.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://storage.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";

module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~nMgmDSJZ#jwD4IisglXvt9hoWNBbAmoIVL9znUqJjyN7kPDJ_jpI", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "256707521863", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // make true to use antidelete 
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💜,💛,❤️,🤍,🖤,💙,🇺🇬,👨‍💻,💯,🤗,😎", //Input Yours Custom...Can be One Emoji or Multiple Emojis
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Gifted-Md!", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "256707521863", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐌𝐎𝐑𝐈𝐂𝐄 𝐔𝐆👨‍💻", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐌𝐎𝐑𝐈𝐂𝐄 𝐔𝐆👨‍💻", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐌𝐎𝐑𝐈𝐂𝐄 𝐔𝐆👨‍💻", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ",",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐌𝐎𝐑𝐈𝐂𝐄𝐔𝐆👨‍💻", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted Morice creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Kampala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
