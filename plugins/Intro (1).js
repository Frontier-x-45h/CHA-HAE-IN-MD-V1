/*
Project Name : CHA HAE-IN-MD
Creator      : The Frontier Lord
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263788521064
*/


const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "intro",
    alias: ["Frontier"],
    react: "🧠",
    desc: "get owner dec",
    category: "info",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `
   *CHA HAE-IN-MD WHATSAPP USER BOT* 💅🧕

                *MY MISSION*

🐼This is the result of my hard work and i The Frontier owns the bots rights and code rights. Therefore, you have no chance to change and submit my bot under any circumstances And 100+ Commands And logo, thumbnail,banner Maker Commands Ai Chatbot features On my Bot, Inform me beforehand.


💁🏻‍♀️The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier


💡 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.


⚠️ Also, if your Whatsapp account gets damaged or banned by using this, i am not responsible and you should take responsibility for it.


🧕 💅 OWNER The Frontier

💁🏻‍♀️ *GITHUB:*  https://github.com/kingmalvn/

⛸️ *GITHUB:*  https://github.com/kingmalvn/MALVIN-XD 

🪩 *MY GROUP:* https://whatsapp.com/channel/0029VazncnIBPzjOc2r0Ed3S

*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* 

`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/y65ffs.jpg` },
                caption: madeMenu,
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
            { quoted: mek }
        );

        // Send audio //https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu.mp3
        await conn.sendMessage(from, { //https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu.mp3
            audio: { url: 'https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu3.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

