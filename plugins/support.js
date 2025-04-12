/*
Project Name : CHA HAE-IN-MD
Creator      : FRONTIER
Repo         : https://github.com/Frontier-x-45h/CHA-HAE-IN-MD-V1
Support      : wa.me/263788521064
*/


const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "follow",
    alias : "follow",
    desc: "base",
    category: "support",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
╭────────────≫💅
┋ *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *THE FRONTIER(🇿🇼)*
┋ *ᴍᴏᴅᴇ* : *${config.MODE}*
┋ *ᴘʀᴇғɪx* : *${config.PREFIX}*
┋ *ᴠᴇʀsɪᴏɴ* : *_3.0.4_* 
┋ *ᴜᴘᴛɪᴍᴇ* : _${runtime(process.uptime())}_
╰────────────≫💋

   CHA HAE-IN-MD sᴜᴘᴘᴏʀᴛ ʟɪɴᴋs ↷

${readMore}
\`CHANNEL🩵\`
https://whatsapp.com/channel/0029VazncnIBPzjOc2r0Ed3S

\`ɢʀᴏᴜᴘ💙\` 👥
https://chat.whatsapp.com/L5LgdAzr7wDG3s97vFjnJJ

\`ʏᴛ ᴄʜᴀɴɴᴇʟ\`💠
 https://youtube.com/@kakashimd-k7e?si=abbezKVvfOz0LjMq

\`The Frontier\` *Developer🧕🏻💅*
wa.me/263788521064?text=Support!


> 🧕🏻ᴊᴏɪɴ CHA HAE-IN-MD ᴄʜᴀɴɴᴇʟ 💠

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🪀『 CHA HAE-IN-MD 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  CHA HAE-IN-MD SC BY THE FRONTIER
