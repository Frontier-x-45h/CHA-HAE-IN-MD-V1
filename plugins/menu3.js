/*created by The Frontier-x-45h
contact dev1 263788521064 ♻️
contact dev2 https://t.me/malvinking2 ♻️
© just give credit will you ⚠
*/





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu3",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
menu: '',
download: '',
group: '',
owner: '',
convert: '',
search: '', 
utility: '',
fun: '',
owner1: '',
sticker: '',
tools: '',
group: '',
info: '',
other: '',
random: '',
misc: '',
settings: '',
anime: '',
support: '',
nsfw: '',
movie: '',
admin: '',
ai: '',
stalk: '',
sports: '',
game: '',



};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┊❍* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `

╭───❍「 *${config.BOT_NAME}* 」
┊ 🧕🏻 *ᴜsᴇʀ:* ${pushname} 
┊ 💅 *ᴍᴏᴅᴇ:* *[${config.MODE}]*
┊ ✨ *ᴘʀᴇғɪx:* *[${config.PREFIX}]*
┊ 🪀 *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs :* *${commands.length}*
┊ 🛰️ *ᴠᴇʀsɪᴏɴ:* *${config.version} ʙᴇᴛᴀ☯︎*
╰───────────❍💠


   *✦『🔺🔻 ADMIN CMD📗 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.admin}
*╰──────────●●►*💠

  *✦『🔻🔺 PRIVATE CMD 📗 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.owner1}
*╰──────────●●►*💠

      *✦『🔺🔻 AI CMD 📗 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.ai}
*╰──────────●●►*💠

   *✦『🔻🔺 MENU CMD 📗 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.menu}
*╰──────────●●►*💠

    *✦『🔺🔻 INFO CMD 📗 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.info}
*╰──────────●●►*💠

  *✦『🔻🔺 SETTINGS CMD 💅  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.settings}
*╰──────────●●►*💠
> 📌 *Note*: Replace "on/off" with the desired state to enable or disable most ō above👆 features. for example .heartreact on

   *✦『🔺🔻 OWNER CMD 💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.owner}
*╰──────────●●►*💠

 *✦『🔻🔺 DOWNLOAD CMD💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.download}
*╰──────────●●►*💠

 *✦『🔺🔻 MOVIEs CMDq💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.movie}
*╰──────────●●►*💠

    *✦『🔻🔺 MAIN CMD💅  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.main}
*╰──────────●●►*💠

   *✦『🔺🔻 GROUP CMD💅  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.group}
*╰──────────●●►*💠

  *✦『🔻🔺 CONVERT CMD💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.convert}
*╰──────────●●►*💠

   *✦『🔺🔻 SEARCH CMD💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.search}
*╰──────────●●►*💠

   *✦『🔻🔺 UTILITY CMD💅  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.utility}
*╰──────────●●►*💠

    *✦『🔺🔻 FUN CMD💅  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.fun}
*╰──────────●●►*💠

   *✦『🔻🔺 TOOLS CMD 💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.tools}
*╰──────────●●►*💠

   *✦『🔺🔻 STICKER CMD💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.sticker}
*╰──────────●●►*💠

  *✦『🔻🔺 RANDOM CMD 💅 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*🛰️
${menu.random}
*╰──────────●●►*💠

    *✦『🔺🔻 MISC CMD 💠 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.misc}
*╰──────────●●►*💠

    *✦『🔻🔺 STALK CMD💠  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.stalk}
*╰──────────●●►*💠

   *✦『🔺🔻 ANIME CMD💠 』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.anime}
*╰──────────●●►*💠

  *✦『🔻🔺 SUPPORT CMD💠  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.support}
*╰──────────●●►*💠

    *✦『🔺🔻 GAME CMD💠  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.game}
*╰──────────●●►*💠

    *✦『🔻🔺 SPORTS CMD💠  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.sports}
*╰──────────●●►*💠

    *✦『🔺🔻 OTHER CMD💠  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.other}
*╰──────────●●►*💠

    *✦『 🔞  CMD💠  』✦*
*╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄╾╾╾*💠
${menu.nsfw}
*╰──────────●●►*💠

 ©Sir Frontier-x-45h💠
*╭──────────╾╾╾*💠
${config.DESCRIPTION}
*╰──────────╾╾╾*💠
`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xo91yg.jpg` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398176647533@newsletter',
                        newsletterName: 'CHA HAE-IN-MD💅 3',
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


