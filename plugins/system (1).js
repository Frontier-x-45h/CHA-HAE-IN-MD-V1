

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    react: "⚙️",
    alias: ["system"],
    desc: "Check system uptime and status.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // ✅ Données système
        const uptime = runtime(process.uptime());
        const usedRam = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const totalRam = Math.round(os.totalmem() / 1024 / 1024);
        const hostname = os.hostname();

        // ✅ Design avec une mise en page améliorée
        const status = `
┌─── ⦿ *SYSTEM STATUS* ⦿ ───┐
│ 🚀 *Uᴘᴛɪᴍᴇ:*       ➔ ${uptime}
│ 💾 *Rᴀᴍ ᴜsᴀɢᴇ:*    ➔ ${usedRam}MB / ${totalRam}MB
│ 🌐 *Hᴏsᴛɴᴀᴍᴇ:*     ➔ ${hostname}
│ 👑 *Oᴡɴᴇʀ:*        ➔ *THE FRONTIER*
└──────────────────┘
        `.trim();

        // ✅ Envoi du message formaté avec une image personnalisée

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7hqhsw.jpg` },
                caption:  `🎯 *System Info* 🎯\n\n${status}`,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: 'FRONTIER Tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

