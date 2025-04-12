/*
Project Name : CHA HAE-IN-MD
Creator      : The Frontier-x-45h 
Repo         : https://github.com/Frontier-x-45h/CHA-HAE-IN-MD-V1
Support      : wa.me/263788521064
*/



const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "menu"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
╭──❍「 *${config.BOT_NAME}* 」
*┊ 🧕🏻* *mᴅ ᴜsᴇʀ* : *${pushname}* 
*┊ 🌐* *ᴍᴏᴅᴇ:* *[${config.MODE}]*
*┊ ✨* *ᴘʀᴇғɪx:* *[ ${config.PREFIX} ]*
*┊ 🕒* *ᴜᴘᴛɪᴍᴇ* :_${runtime(process.uptime())}_
*┊ 👤* *ᴏᴡɴᴇʀ:* *${config.OWNER_NAME}*
*┊ 🎐* *ᴠᴇʀsɪᴏɴ:* *${config.version} ʙᴇᴛᴀ☯︎*
╰─────────────❍

    👤〔ᴊᴏɪɴ mᴅ ᴄʜᴀɴɴᴇʟ〕👤
    
🧕🏻 *ʀᴇᴘʟʏ ᴀ ᴄᴀᴛᴇɢᴏʀʏ ᴡɪᴛʜ ɪᴛs ɴᴜᴍʙᴇʀ*  

1 🧕🏻 ᴀᴅᴍɪɴ ᴍᴇɴᴜ

2 🔹 ᴘʀɪᴠᴀᴛᴇ ᴍᴇɴᴜ

3 🔸 ᴍᴇɴᴜ ᴍᴇɴᴜ

4 🔹 ɪɴғᴏ ᴍᴇɴᴜ

5 ⚙️ sᴇᴛᴛɪɴɢs ᴍᴇɴᴜ

6 🔸 ᴏᴡɴᴇʀ ᴍᴇɴᴜ

7 🔹 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ

8 🔸 ᴍᴏᴠɪᴇ ᴍᴇɴᴜ

9 🔹 ᴍᴀɪɴ ᴍᴇɴᴜ

10 🧕🏻 ɢʀᴏᴜᴘ ᴍᴇɴᴜ

11 💱 ᴄᴏɴᴠᴇᴛ ᴍᴇɴᴜ

12 🔹 sᴇᴀʀᴄʜ ᴍᴇɴᴜ

13 🔸 ᴜᴛɪʟɪᴛʏ ᴍᴇɴᴜ

14 🔹 ғᴜɴ ᴍᴇɴᴜ

15 🔸 ᴛᴏᴏʟs ᴍᴇɴᴜ

16 🧕🏻 sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ

17 🔹 ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ

18 ⚙️ ᴍɪsᴄ ᴍᴇɴᴜ

19 🔸 ᴀɴɪᴍᴇ ᴍᴇɴᴜ

20 🔹 sᴜᴘᴘᴏʀᴛ ᴍᴇɴᴜ

21 🔸 ᴀɪ ᴍᴇɴᴜ

22 🔹 ᴏᴛʜᴇʀ ᴍᴇɴᴜ

23 🔸 ɴsғᴡ ᴍᴇɴᴜ


> © The Frontier-x-45h

ᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ🧕🏻 https://whatsapp.com/channel/0029VazncnIBPzjOc2r0Ed3S
🧕🏻 For more info, visit
https://chat.whatsapp.com/LSkCn7PzjfQHDkMQcSSEPM

> ®2025 CHA HAE-IN-MD 🔻🔺⏯️

`;
        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/xo91yg.jpg"}, 
  caption: desc, 
  contextInfo: {
    mentionedJid: [''], 
    groupMentions: [],
    forwardingScore: 999, // برای فوروارد شدن
    isForwarded: true, // پیام به صورت فوروارد شده نشان داده می‌شود
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363398176647533@newsletter', 
      newsletterName: "Frontier-x-45h", 
      serverMessageId: 999
    },
    externalAdReply: { 
      title: 'Subscribe YouTube', 
      body: `${pushname}`, 
      mediaType: 1, 
      sourceUrl: "https://www.youtube.com/@malvintech2", 
      thumbnailUrl: "https://www.youtube.com/@malvintech2" ,
      previewType: 'PHOTO',
      renderSmallerThumbnail: true,
      showAdAttribution: true
    }
  }
}, { quoted: mek });

// Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/kingmalvin7/MALVIN-DATA/raw/refs/heads/main/autovoice/menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

        
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':                
                        let reply1 =(`
                        
      *✦『🔻🔺 ᴀᴅᴍɪɴ ᴄᴍᴅ ⏯️ 』✦*                       
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*⛸️
*┊❍* ☣️ᴇxᴀᴍᴘʟᴇᴄᴍᴅ
*┊❍* ☣️sᴇᴛsᴜᴅᴏ
*┊❍* ☣️ᴅᴇʟsᴜᴅᴏ
*┊❍* ☣️ɢᴇᴛsᴜᴅᴏ
*┊❍* ☣️ᴘᴀɪʀ
*╰──────────●●►*💠
📊 ᴛᴏᴛᴀʟ ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ: 5

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply1,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🧕🏻ᴀᴅᴍɪɴ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '2':               
                        let reply2 =(`
                        
     *✦『 🔺🔻ᴘʀɪᴠᴀᴛᴇ ᴄᴍᴅ ⏯️  』✦*                    
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
*┊❍* 💠 ᴅɪᴀʀʏ
*┊❍* 💠 sᴇᴛᴅɪᴀʀʏ
*┊❍* 💠 ʀᴇsᴇᴛᴅɪᴀʀʏ
*┊❍* 💠 ʀᴇsᴇᴛᴘᴀssᴡᴏʀᴅ
*┊❍* 💠 ᴅᴀɪʟʏғᴀᴄᴛ
*┊❍* 💠 ᴀɢᴇ
*┊❍* 💠 ᴛɪᴍᴇᴢᴏɴᴇ
*┊❍* 💠 sᴇᴛᴍʏɴᴀᴍᴇ
*┊❍* 💠 ᴘᴘ
*┊❍* 💠 ɢᴇᴛᴘʀɪᴠᴀᴄʏ
*┊❍* 💠 ᴡᴀ
*╰──────────●●►*🛰️

♒ ᴛᴏᴛᴀʟ ᴘʀɪᴠᴀᴛᴇ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ : 11

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply2,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '📵 ᴘʀɪᴠᴀᴛᴇ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '3':               
                        let reply3 =(`      
                        
     *✦『 🔻🔺🔻ᴍᴇɴᴜ ᴄᴍᴅ ⏯️  』✦*                    
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
*┊❍* 💠 ᴀʟʟᴍᴇɴᴜ
*┊❍* 💠 ʟɪsᴛ
*┊❍* 💠 ᴇɴᴠ
*┊❍* 💠 ɢɪᴛʜᴜʙsᴛᴀʟᴋ
*┊❍* 💠 ᴍᴇɴᴜ
*┊❍* 💠 ᴍᴇɴᴜ2
*┊❍* 💠 ᴅʟᴍᴇɴᴜ
*┊❍* 💠 ɢʀᴏᴜᴘᴍᴇɴᴜ
*┊❍* 💠 ғᴜɴᴍᴇɴᴜ
*┊❍* 💠 ᴏᴛʜᴇʀᴍᴇɴᴜ
*┊❍* 💠 sᴇᴀʀᴄʜᴍᴇɴᴜ
*┊❍* 💠 ᴍᴀɪɴᴍᴇɴᴜ
*┊❍* 💠 ᴏᴡɴᴇʀᴍᴇɴᴜ
*┊❍* 💠 ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
*┊❍* 💠 ᴘʀɪᴠᴀᴛᴇᴍᴇɴᴜ
*┊❍* 💠 sᴇᴛᴛɪɴɢsᴍᴇɴᴜ
*┊❍* 💠 ᴛᴏᴏʟsᴍᴇɴᴜ
*┊❍*, 💠 ᴀɪᴍᴇɴᴜ
*╰──────────●●►*🛰️

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴇɴᴜ: 18

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply3,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🧕🏻 ᴍᴇɴᴜ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '4':               
                        let reply4 =(`       
                        
     *✦『🔻🔺 ɪɴғᴏ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*
*┊❍* ɪɴᴛʀᴏ
*┊❍* ᴀʙᴏᴜᴛ
*┊❍* ᴠᴇʀsɪᴏɴ
*┊❍* ʟᴀɴɢᴄᴏᴅᴇ
*┊❍* ʀᴇᴘᴏ
*┊❍* sᴛᴀʀᴛ
*╰──────────●●►*


📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɪɴғᴏ: 6

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply4,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '🔎 ɪɴғᴏ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '5':               
                        let reply5 =(` 
                        
    *✦『 🔻🔺sᴇᴛᴛɪɴɢs ᴄᴍᴅ ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*♒
*┊❍* 💠 ᴘʀᴇғɪx
*┊❍* 💠 ᴍᴏᴅᴇ
*┊❍* 💠 ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ
*┊❍* 💠 ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ
*┊❍* 💠 ғᴀᴋᴇᴛʏᴘɪɴɢ
*┊❍* 💠 ғᴀᴋᴇʀᴇᴄᴏʀᴅɪɴɢ
*┊❍* 💠 ᴀᴜᴛᴏsᴇᴇɴ
*┊❍* 💠 sᴛᴀᴛᴜsʀᴇᴀᴄᴛ
*┊❍* 💠 ᴀɴᴛɪᴄᴀʟʟ
*┊❍* 💠 ʀᴇᴀᴅᴍᴇssᴀɢᴇ
*┊❍* 💠 ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ
*┊❍* 💠 ᴀɴᴛɪʙᴀᴅ
*┊❍* 💠 ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ
*┊❍* 💠 ᴀᴜᴛᴏʀᴇᴘʟʏ
*┊❍* 💠 ᴀᴜᴛᴏʀᴇᴀᴄᴛ
*┊❍* 💠 sᴛᴀᴛᴜsʀᴇᴘʟʏ
*┊❍* 💠 ᴀᴜᴛᴏᴠᴏɪᴄᴇ
*┊❍* 💠 sᴇᴛᴠᴀʀ
*┊❍* 💠 ʜᴇᴀʀᴛʀᴇᴀᴄᴛ
*╰──────────●●►*🛰️

> 📌 *ɴᴏᴛᴇ*: ᴀᴅᴅ "ᴏɴ/ᴏғғ" ᴡɪᴛʜ ᴛʜᴇ ᴅᴇsɪʀᴇᴅ sᴛᴀᴛᴇ ᴛᴏ ᴇɴᴀʙʟᴇ ᴏʀ ᴅɪsᴀʙʟᴇ ᴍᴏsᴛ ᴏ̄ ᴇ̄ ᴀʙᴏᴠᴇ👆 ғᴇᴀᴛᴜʀᴇs. ᴇɢ .ᴀᴜᴛᴏʀᴇᴀᴄᴛ ᴏɴ

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴛᴛɪɴɢs: 19

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply5,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '⚙️sᴇᴛᴛɪɴɢs ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '6':               
                        let reply6 =(`  
                        
                         
     *✦『🔻🔺 ᴏᴡɴᴇʀ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴀʟɪᴠᴇ
*┊❍* 💠 ʙʟᴏᴄᴋ
*┊❍* 💠 ᴜɴʙʟᴏᴄᴋ
*┊❍* 💠 ᴘᴘ
*┊❍* 💠 ɢᴇᴛ
*┊❍* 💠 ʟᴇᴀᴠᴇ
*┊❍* 💠 sʜᴜᴛᴅᴏᴡɴ
*┊❍* 💠 ʙʀᴏᴀᴅᴄᴀsᴛ
*┊❍* 💠 sᴇᴛᴘᴘ
*┊❍* 💠 ʙʟᴏᴄᴋ
*┊❍* 💠 ᴜɴʙʟᴏᴄᴋ
*┊❍* 💠 ᴄʟᴇᴀʀᴄʜᴀᴛs
*┊❍* 💠 ᴊɪᴅ
*┊❍* 💠 ɢᴊɪᴅ
*┊❍* 💠 ʀᴇsᴛᴀʀᴛ
*┊❍* 💠 ᴄᴏᴜɴᴛx
*┊❍* 💠 ᴄᴏᴜɴᴛ
*┊❍* 💠 sᴇᴛᴛɪɴɢs
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 18

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply6,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                       break;
                    case '7':               
                        let reply7 =(` 
                        
    *✦『🔻🔺 ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴘʟᴀʏᴘʀᴏ
*┊❍* 💠 ʏᴛᴘᴏsᴛ
*┊❍* 💠 ᴛɪᴋᴛᴏᴋ
*┊❍* 💠 ɪɴsᴛᴀ
*┊❍* 💠 ғʙ
*┊❍* 💠 ᴛᴡɪᴛᴛᴇʀ
*┊❍* 💠 ᴍᴇᴅɪᴀғɪʀᴇ
*┊❍* 💠 ɢᴅʀɪᴠᴇ
*┊❍* 💠 ᴘᴀɪʀ
*┊❍* 💠 ɢɪᴛᴄʟᴏɴᴇ
*┊❍* 💠 sᴘᴏᴛɪғʏ
*┊❍* 💠 ᴘɪɴᴅʟ
*┊❍* 💠 ᴘʟᴀʏ2
*┊❍* 💠 ᴛɪᴋᴛᴏᴋ2
*┊❍* 💠 ᴛᴛs
*┊❍* 💠 ᴠɪᴅᴇᴏ2
*┊❍* 💠 ᴘʟᴀʏ2
*┊❍* 💠 sᴏɴɢx
*┊❍* 💠 ᴠɪᴅᴇᴏx
*┊❍* 💠 ᴍᴘ4
*┊❍* 💠 ᴍᴘ3
*┊❍* 💠 sᴏɴɢ2
*┊❍* 💠 ᴘʟᴀʏ
*┊❍* 💠 sᴏɴɢ
*╰──────────●●►*💠


📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 24

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply7,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '8':               
                        let reply8 =(`
                        
      *✦『🔻🔺 ᴍᴏᴠɪᴇs ᴄᴍᴅ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ʙᴀɪsᴄᴏᴘᴇ
*┊❍* 💠 ɢɪɴɪsɪsɪʟᴀ
*┊❍* 💠 sɪɴʜᴀʟᴀsᴜʙ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴏᴠɪᴇ: 3

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply8,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '📽 ᴍᴏᴠɪᴇs ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                       break;
                    case '9':               
                        let reply9 =(`    
                        
      *✦『🔻🔺 ᴍᴀɪɴ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴍᴇɴᴜ3
*┊❍* 💠 ʟɪᴠᴇ
*┊❍* 💠 ᴏᴡɴᴇʀ
*┊❍* 💠 ᴘɪɴɢ
*┊❍* 💠 ᴘɪɴɢ2
*┊❍* 💠 ᴘɪɴɢ3
*┊❍* 💠 sʏsᴛᴇᴍ
*┊❍* 💠 ғᴇᴛᴄʜ
*┊❍* 💠 ᴜᴘᴛɪᴍᴇ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 9

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply9,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '📋 ᴍᴀɪɴ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                       break;
                    case '10':               
                        let reply10 =(`  
                        
     *✦『🔻🔺 ɢʀᴏᴜᴘ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴀɴᴛɪʟɪɴᴋ
*┊❍* 💠 ᴀɴᴛɪʙᴏᴛ
*┊❍* 💠 ᴀᴄᴄᴇᴘᴛᴀʟʟ
*┊❍* 💠 ʀᴇᴊᴇᴄᴛᴀʟʟ
*┊❍* 💠 ᴀɴᴛɪʟɪɴᴋ1
*┊❍* 💠 ᴘᴏʟʟ
*┊❍* 💠 ɴᴇᴡɢᴄ
*┊❍* 💠 ɪɴᴠɪᴛᴇ
*┊❍* 💠 ɢɪɴғᴏ
*┊❍* 💠 ʙʀᴏᴀᴅᴄᴀsᴛ
*┊❍* 💠 sᴇᴛɢᴘᴘ
*┊❍* 💠 ᴅᴇʟᴇᴛᴇ
*┊❍* 💠 ᴊɪᴅ1
*┊❍* 💠 ᴊɪᴅ2
*┊❍* 💠 ᴀᴅᴅ
*┊❍* 💠 ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ
*┊❍* 💠 ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ
*┊❍* 💠 ᴋɪᴄᴋ
*┊❍* 💠 ʟᴏᴄᴋɢᴄ
*┊❍* 💠 ᴍᴜᴛᴇ
*┊❍* 💠 ᴜɴʟᴏᴄᴋɢᴄ
*┊❍* 💠 ᴜɴᴍᴜᴛᴇ
*┊❍* 💠 ᴊᴏɪɴ
*┊❍* 💠 ɪɴᴠɪᴛᴇ
*┊❍* 💠 ʀᴇᴠᴏᴋᴇ
*┊❍* 💠 ᴋɪᴄᴋ
*┊❍* 💠 ᴘʀᴏᴍᴏᴛᴇ
*┊❍* 💠 ᴅᴇᴍᴏᴛᴇ
*┊❍* 💠 ʜɪᴅᴇᴛᴀɢ
*┊❍* 💠 ᴛᴀɢɢᴘ
*┊❍* 💠 ɢɪɴғᴏ
*┊❍* 💠 ʀᴇᴍᴏᴠᴇᴍᴇᴍʙᴇʀs
*┊❍* 💠 ʀᴇᴍᴏᴠᴇᴀᴅᴍɪɴs
*┊❍* 💠 ʀᴇᴍᴏᴠᴇᴀʟʟ2
*┊❍* 💠 ᴏᴘᴇɴᴛɪᴍᴇ
*┊❍* 💠 ᴄʟᴏsᴇᴛɪᴍᴇ
*┊❍* 💠 ᴛᴀɢᴀᴅᴍɪɴ
*┊❍* 💠 sᴇᴛɢᴏᴏᴅʙʏᴇ
*┊❍* 💠 sᴇᴛᴡᴇʟᴄᴏᴍᴇ
*┊❍* 💠 ᴅᴇʟᴇᴛᴇ
*┊❍* 💠 ᴛᴀɢᴀʟʟ
*┊❍* 💠 ᴛᴀɢ
*╰──────────●●►*💠
📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 42

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply10,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: ' 👨‍👩‍👦‍👦 ɢʀᴏᴜᴘ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '11':               
                        let reply11 =(` 
                        
    *✦『🔻🔺 ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴄᴏɴᴠᴇʀᴛᴍᴏɴᴇʏ
*┊❍* 💠 ᴛᴏᴜʀʟ2
*┊❍* 💠 ᴛᴏᴜʀʟ
*┊❍* 💠 ᴘᴅғ
*┊❍* 💠 ᴛᴏᴘᴅғ
*┊❍* 💠 ᴀᴛᴛᴘ
*┊❍* 💠 ʀᴇᴀᴅᴍᴏʀᴇ
*┊❍* 💠 ᴛᴛs2
*┊❍* 💠 ᴛᴛs3
*┊❍* 💠 ᴛʀᴛ
*┊❍* 💠 ᴛɪɴʏ
*╰──────────●●►*


📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 11

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply11,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🔄 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '12':               
                        let reply12 =(`  
                        
     *✦『🔻🔻 sᴇᴀʀᴄʜ ᴄᴍᴅ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴅᴇғɪɴᴇ
*┊❍* 💠 ɪᴍɢ
*┊❍* 💠 ɢᴏᴏɢʟᴇ
*┊❍* 💠 ᴍᴏᴠɪᴇ
*┊❍* 💠 ɴᴇᴡs
*┊❍* 💠 ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ
*┊❍* 💠 ᴡɪᴋɪᴘᴇᴅɪᴀ
*┊❍* 💠 ʏᴛs
*┊❍* 💠 ʟʏʀɪᴄs
*┊❍* 💠 ʟʏʀɪᴄs2
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 10

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply12,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🔤 sᴇᴀʀᴄʜ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '13':               
                        let reply13 =(`  
                        
                         
     *✦『🔺🔻 ᴜᴛɪʟɪᴛʏ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴄʀᴇᴀᴛᴇᴀᴘɪ
*┊❍* 💠 ᴄʜᴇᴄᴋ
*┊❍* 💠 ᴍɪɴᴜᴛᴏʀ
*┊❍* 💠 ϙᴜɪᴢ
*┊❍* 💠 ʟɪsᴛᴘʟᴜɢɪɴs
*┊❍* 💠 ᴘʟᴜɢɪɴ
*┊❍* 💠 ʀᴀɴᴋ
*┊❍* 💠 sᴀᴠᴇ
*┊❍* 💠 ᴛᴇᴍᴘᴍᴀɪʟ
*┊❍* 💠 ʀᴄᴏʟᴏʀ
*┊❍* 💠 ʙɪɴᴀʀʏ
*┊❍* 💠 ᴅʙɪɴᴀʀʏ
*┊❍* 💠 ʙᴀsᴇ64
*┊❍* 💠 ᴜɴʙᴀsᴇ64
*┊❍* 💠 ᴜʀʟᴇɴᴄᴏᴅᴇ
*┊❍* 💠 ᴜʀʟᴅᴇᴄᴏᴅᴇ
*┊❍* 💠 ᴛɪᴍᴇɴᴏᴡ
*┊❍* 💠 ᴅᴀᴛᴇ
*┊❍* 💠 ʀᴇᴘᴏʀᴛ
*┊❍* 💠 ᴛɪɴʏᴜʀʟ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴜᴛɪʟɪᴛʏ: 20

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply13,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🧕🏻 ᴜᴛɪʟɪᴛʏ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                       break;
                    case '14':               
                        let reply14 =(`   
                        
      *✦『🔻🔺 ғᴜɴ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 📗 ʙɪʙʟᴇ
*┊❍* 📗 ᴄᴏᴜᴘʟᴇᴘᴘ
*┊❍* 📗 ʀɪɴɢᴛᴏɴᴇ
*┊❍* 📗 ᴇᴍɪx
*┊❍* 📗 ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ
*┊❍* 📗 ᴀᴜʀᴀ
*┊❍* 📗 8ʙᴀʟʟ
*┊❍* 📗 ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
*┊❍* 📗 ʟᴏᴠᴇᴛᴇsᴛ
*┊❍* 📗 ᴇᴍᴏᴊɪ
*┊❍* 📗 ғᴀᴄᴛ
*┊❍* 📗 ᴊᴏᴋᴇ
*┊❍* 📗 ᴅɪᴅʏᴏᴜᴋɴᴏᴡ
*┊❍* 📗 sʜɪᴘ
*┊❍* 📗 ᴄᴏsᴘʟᴀʏ
*┊❍* 📗 sϙᴜɪᴅɢᴀᴍᴇ
*┊❍* 🧕🏻 ᴀɴɪᴍᴇɢɪʀʟ
*┊❍* 🧕🏻 ᴀɴɪᴍᴇɢɪʀʟ1
*┊❍* 🧕🏻 ᴀɴɪᴍᴇɢɪʀʟ2
*┊❍* 🧕🏻 ᴀɴɪᴍᴇɢɪʀʟ3
*┊❍* 🧕🏻 ᴀɴɪᴍᴇɢɪʀʟ4
*┊❍* 🧕🏻 ᴀɴɪᴍᴇɢɪʀʟ5
*┊❍* 💠 ᴅᴏɢ
*┊❍* 💠 ᴄᴀᴛ
*┊❍* 💠 ᴋɪss
*┊❍* 💠 ʜᴀᴄᴋ
*┊❍* 💠 ϙᴜᴏᴛᴇ
*┊❍* 💠 ᴄʀʏ
*┊❍* 💠 ᴄᴜᴅᴅʟᴇ
*┊❍* 💠 ʙᴜʟʟʏ
*┊❍* 💠 ʜᴜɢ
*┊❍* 💠 ᴀᴡᴏᴏ
*┊❍* 💠 ʟɪᴄᴋ
*┊❍* 💠 ᴘᴀᴛ
*┊❍* 💠 sᴍᴜɢ
*┊❍* 💠 ʙᴏɴᴋ
*┊❍* 💠 ʏᴇᴇᴛ
*┊❍* 💠 ʙʟᴜsʜ
*┊❍* 💠 ʜᴀɴᴅʜᴏʟᴅ
*┊❍* 💠 ʜɪɢʜғɪᴠᴇ
*┊❍* 💠 ɴᴏᴍ
*┊❍* 💠 ᴡᴀᴠᴇ
*┊❍* 💠 sᴍɪʟᴇ
*┊❍* 💠 ᴡɪɴᴋ
*┊❍* 💠 ʜᴀᴘᴘʏ
*┊❍* 💠 ɢʟᴏᴍᴘ
*┊❍* 💠 ʙɪᴛᴇ
*┊❍* 💠 ᴘᴏᴋᴇ
*┊❍* 💠 ᴄʀɪɴɢᴇ
*┊❍* 💠 ᴅᴀɴᴄᴇ
*┊❍* 💠 ᴋɪʟʟ
*┊❍* 💠 sʟᴀᴘ
*┊❍* 💠 ᴋɪss
*┊❍* 💠 sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ
*┊❍* 💠 ʀᴏʟʟ
*┊❍* 💠 ᴄᴏɪɴғʟɪᴘ
*┊❍* 💠 ғʟɪᴘ
*┊❍* 💠 ᴘɪᴄᴋ
*┊❍* 💠 sʜᴀᴘᴀʀ
*┊❍* 💠 ʀᴀᴛᴇ
*┊❍* 💠 ᴊᴏᴋᴇ
*┊❍* 💠 ғʟɪʀᴛ
*┊❍* 💠 ᴛʀᴜᴛʜ
*┊❍* 💠 ᴅᴀʀᴇ
*┊❍* 💠 ғᴀᴄᴛ
*┊❍* 💠 ᴘɪᴄᴋᴜᴘʟɪɴᴇ
*┊❍* 💠 ᴄʜᴀʀᴀᴄᴛᴇʀ
*┊❍* 💠 ʀᴇᴘᴇᴀᴛ
*┊❍* 💠 sᴇɴᴅ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 70

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply14,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🧕🏻 ғᴜɴ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '15':               
                        let reply15 =(`  
                       
      *✦『🔺🔻 ᴛᴏᴏʟs ᴄᴍᴅ ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 sᴛᴀᴛᴜs
*┊❍* 💠 ᴀᴘᴋ
*┊❍* 💠 ʜᴀᴘᴘʏ
*┊❍* 💠 ʜᴇᴀʀᴛ
*┊❍* 💠 ᴀɴɢʀʏ
*┊❍* 💠 sᴀᴅ
*┊❍* 💠 sʜʏ
*┊❍* 💠 ᴍᴏᴏɴ
*┊❍* 💠 ᴄᴏɴғᴜsᴇᴅ
*┊❍* 💠 ʜᴏᴛ
*┊❍* 💠 ɴɪᴋᴀʟ
*┊❍* 💠 ᴇᴠᴀʟ
*┊❍* 💠 ғᴀɴᴄʏ
*┊❍* 💠 ᴘʜᴏᴛᴏ
*┊❍* 💠 ɴᴀsᴀ
*╰──────────●●►*

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴛᴏᴏʟs: 15

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply15,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🧕🏻 ᴛᴏᴏʟs  ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '16':               
                        let reply16 =(`  
                        
    *✦『🔻🔺 sᴛɪᴄᴋᴇʀ ᴄᴍᴅ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*
*┊❍* 💠 sᴛɪᴄᴋᴇʀ2ɪᴍɢ
*┊❍* 💠 ᴛᴀᴋᴇ
*┊❍* 💠 sᴛɪᴄᴋᴇʀ
*┊❍* 💠 ᴠsᴛɪᴄᴋᴇʀ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴛɪᴄᴋᴇʀ: 4

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply16,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🎐 sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                       break;
                    case '17':               
                        let reply17 =(`  
                        
     *✦『🔻🔺 ʀᴀɴᴅᴏᴍ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ʀᴅᴀɴɪᴍᴇ
*┊❍* 💠 ʀᴡ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ʀᴀɴᴅᴏᴍ: 2

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply17,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🧕🏻 ʀsɴᴅᴏᴍ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '18':               
                        let reply18 =(`    
                        
      *✦『🔻🔺 ᴍɪsᴄ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴠᴠ
*┊❍* 💠 ᴜᴘᴅᴀᴛᴇ
*┊❍* 💠 ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍɪsᴄ: 3

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply18,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🗣️ ᴍɪsᴄ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '19':               
                        let reply19 =(`  
                        
     *✦『🔺🔻🔻 ᴀɴɪᴍᴇ ᴄᴍᴅ⏯️ 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*
*┊❍* 💠 ɴᴇᴋᴏ
*┊❍* 💠 ᴡᴀɪғᴜ
*┊❍* 💠 ʜᴇɴᴛᴀɪ
*┊❍* 💠 ɢᴀʀʟ
*┊❍* 💠 ᴡᴀɪғᴜ
*┊❍* 💠 ɴᴇᴋᴏ
*┊❍* 💠 ᴍᴇɢᴜᴍɪɴ
*┊❍* 💠 ᴍᴀɪᴅ
*┊❍* 💠 ᴀᴡᴏᴏ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɴɪᴍᴇ: 9

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply19,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🎌 ᴀɴɪᴍᴇ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                       break;
                    case '20':               
                        let reply20 =(`
                        
    *✦『🔺🔻 sᴜᴘᴘᴏʀᴛ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ᴄʜᴀɴɴᴇʟ
*┊❍* 💠 sᴜᴘᴘᴏʀᴛ
*┊❍* 💠 ғᴏʟʟᴏᴡ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴜᴘᴘᴏʀᴛ: 3

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply20,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter,
                        newsletterName: '💬 sᴜᴘᴘᴏʀᴛ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                       break;
                    case '21':               
                        let reply21 =(`
                        
        〘🔺🔻 𝗔𝗜 𝗠𝗘𝗡𝗨⏯️ 〙
╭─────────────⪼🛰️
*┊❍* 💠 *ᴀɪ* 
*┊❍* 💠 *ɢᴘᴛ*
*┊❍* 💠 *ᴍᴀʟᴠɪɴ*
*┊❍* 💠 *ɢᴇᴍɪɴɪ*
*┊❍* 💠 *ɢᴘᴛ3*
*┊❍* 💠 *ᴍɪsᴛʀᴀᴀɪ*
*┊❍* 💠 *ʟʟᴀᴍᴀ3*
*┊❍* 💠 *ɢᴘᴛ4o*
*┊❍* 💠 *ᴍᴀʟᴠɪɴᴀɪ*
*┊❍* 💠 *ᴀɪɪᴍɢ*
*┊❍* 💠 *ɢᴇɴᴇʀᴀᴛᴇɪᴍɢ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 11

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply21,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🤖ᴀɪ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '22':               
                        let reply22 =(`   
      *✦『🔺🔻 ᴏᴛʜᴇʀ ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ɴᴘᴍɢᴜɪᴅᴇ
*┊❍* 💠 ɢᴘᴀss
*┊❍* 💠 ʟᴏɢᴏ
*┊❍* 💠 sss
*┊❍* 💠 ᴡᴇᴀᴛʜᴇʀ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ: 5

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply22,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🧕🏻ᴏᴛʜᴇʀ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
                       break;
                    case '23':               
                        let reply23 =(`
                        
       *✦『 🔞  ᴄᴍᴅ⏯️  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
*┊❍* 💠 ɴsғᴡ
*┊❍* 💠 ᴇᴊᴀᴄᴜʟᴀᴛɪᴏɴ
*┊❍* 💠 ᴘᴇɴɪs
*┊❍* 💠 ᴇʀᴇᴄ
*┊❍* 💠 ɴᴜᴅᴇ
*┊❍* 💠 sᴇx
*┊❍* 💠 ᴄᴜᴛᴇ
*┊❍* 💠 ᴏʀɢᴀsᴍ
*┊❍* 💠 ᴀɴᴀʟ
*┊❍* 💠 sᴜsᴘᴇɴsɪᴏɴ
*┊❍* 💠 xɴxxᴅᴏᴡɴ
*┊❍* 💠 xᴠᴅᴏᴡɴ
*╰──────────●●►*💠

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɴsғᴡ: 12

 ${config.DESCRIPTION}`);
await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: reply23,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🔞ɴsғ ᴍᴇɴᴜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
                        break;
                    default:
                        reply("Invalid option. Please reply a valid option❗ғᴏʀ ᴇxᴀᴍᴘʟᴇ 1");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
