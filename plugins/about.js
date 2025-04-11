/*
Project Name : CHA HAE-IN-MD
Creator      : The Frontier-x
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263788521064
*/


const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["about"],
    react: "🌸",
    desc: "get owner dec",
    category: "info",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `╭┄┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*👋 ʜᴇʟʟᴏ ᴜsᴇʀ ${pushname}*\n\n *ɪ ᴀᴍ CHA HAE-IN-MD*\n\n
  ɪ ᴀᴍ  ᴡʜᴀᴛsᴀᴘᴘ ʙᴀsᴇᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ The Frontier-x ғʀᴏᴍ ᴢɪᴍʙᴀʙᴡᴇ.\nᴍʏ sᴏʟᴇ ᴘᴜʀᴘᴏsᴇ ɪs ᴛᴏ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʙᴜʀᴅᴇɴ ᴏʀ ᴄᴏsᴛ ᴏғ ᴘᴜʀᴄʜᴜsɪɴɢ ᴅᴀᴛᴀ ʙᴜɴᴅʟᴇ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴏɴɢs, ᴀᴘᴘs, ᴠɪᴅᴇᴏs & ᴍᴏᴠɪᴇs ʙʏ  ᴜsɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ  ʙᴜɴᴅʟᴇs.
\n\n *ғᴏʀ ᴍᴏʀᴇ ɪɴғᴏʀ ᴠɪsɪᴛ.....
     ─┄┄┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┄┄─

> *SOURCE CODE* : https://github.com/kingmalvn/MALVIN-XD

> *FOLLOW OWNER* :https://github.com/Sololordss200/

> *OWNER'S WHATSAPP* : https://wa.me/263788521064/?text=CHA HAE-IN-MD+Fan+Here

> *maintained by* :
https://wa.me/263788521064/?text=CHA HAE-IN-MD+Fan+Here

> *SUPPORT CHANNEL* : https://whatsapp.com/channel/0029VazncnIBPzjOc2r0Ed3S
> *FOLLOW INSTAGRAM* :https://instagram.com/Techlord01/

> *FOLLOW OWNER* :https://youtube.com/@malvintech2/

 *RELEASE DATE* - *20 April 2025*
 
> *༆̊̊̊̊̊❀Project-x༆*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/l1uebm.jpg` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: '🪀『 CHA HAE-IN-MD』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu.mp3
        await conn.sendMessage(from, { //https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu.mp3
            audio: { url: 'https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

