const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "allmenu",

    react: "🧕",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "menu",

    use: '.allmenu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `
 *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ CHA HAE-IN-MD ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ THE FRONTIER 👨‍💻*

╭───❍「 *${config.BOT_NAME}* 」
┊ 🧕🏻 *ᴜsᴇʀ:* ${pushname} 
┊ ⛩️ *ᴍᴏᴅᴇ:* *[${config.MODE}]*
┊ 📡 *ᴘʀᴇғɪx:* *[${config.PREFIX}]*
┊ 🍷 *ʀᴀᴍ ᴜsᴇ:* *[ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ]*
┊ 🛰️ *ᴏᴡɴᴇʀ:* *${config.OWNER_NAME}*
┊ 🌷 *ᴠᴇʀsɪᴏɴ:* *${config.version} ʙᴇᴛᴀ☯︎*
╰───────────❍🛰️

〘 💅𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗠𝗘𝗡𝗨💠 〙

╭────────────⪼💠
┋ ☻ *.ᴅɪᴀʀʏ*
┋ ☻ *.sᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴘᴀssᴡᴏʀᴅ*
┋ ☻ *.ᴅᴀɪʟʏғᴀᴄᴛs*
┋ ☻ *.ᴀɢᴇ*
┋ ☻ *.ᴛɪᴍᴇᴢᴏɴᴇ*
┋ ⚉ *.ʏᴛsᴛᴀʟᴋ*
┋ ☻ *.sᴇɴᴅɪᴍᴀɢᴇ*
┋ ☻ *.ᴄᴏᴜɴᴛʀʏ*
┋ ☻ *.ᴠᴄᴀʀᴅ*
┋ ☻ *.ᴡᴀ*
┋ ☻ *.ᴀᴜᴛᴏʙɪᴏ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷💠
〘 💅𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨🧕 〙

╭───────────────⪼🛰️
┋☻ *.sᴇᴛᴛɪɴɢs*
┋☻ *.ʀᴇᴘᴏʀᴛ* 
┋⚉ *.ᴏᴡɴᴇʀ*
┋⚉ *.ʀᴇϙᴜᴇsᴛ*
┋☻ *.ʀᴀɴᴋ*
┋⚉ *.ʀᴇᴘᴏ*
┋⚉ *.ʙᴏᴛ*
┋⚉ *.ᴄʜᴇᴄᴋ*
┋⚉ *.sᴜᴘᴘᴏʀᴛ*
┋☻ *.sᴜᴘᴘᴏʀᴛ2*
┋⚉ *.ᴄʜᴀɴɴᴇʟ*
┋⚉ *.ꜱʏꜱᴛᴇᴍ*
┋⚉ *.ᴠᴇrsɪᴏɴ*
┋⚉ *.ʙʟᴏᴄᴋ*
┋⚉ *.ᴜɴʙʟᴏᴄᴋ*
┋⚉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ *.sᴇᴛᴘᴘ*
┋⚉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ *.ᴘɪɴɢ*
┋⚉ *.ᴘɪɴɢ2*
┋⚉ *.ᴊɪᴅ*
┋⚉ *.ɢᴊɪᴅ*
┋⚉ *.ᴊɪᴅ1*
┋⚉ *.ᴊɪᴅ2*
┋⚉ *.ʀᴇꜱᴛᴀʀᴛ*
┋⚉ *.ᴡʜᴀᴛsɴᴇᴡ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴘᴀɪʀ 263xxx*
┋⚉ *.ᴘᴀɪʀ2 263xxx*
┋☻ *.sᴘᴀᴍ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷💠

*〘 💅𝗔𝗜 𝗠𝗘𝗡𝗨🧕 〙

╭─────────────⪼🛰️
┋ ☻ *ᴀɪ* 
┋ ☻ *CHAHAEIN*
┋ ☻ *ᴍᴀʟᴠɪɴ*
┋ ☻ *ɢᴇᴍɪɴɪ*
┋ ☻ *ɢᴘᴛ3*
┋ ☻ *ᴍɪsᴛʀᴀᴀɪ*
┋ ☻ *ʟʟᴀᴍᴀ3*
┋ ☻ *ɢᴘᴛ4o*
┋ ☻ *ᴍᴀʟᴠɪɴᴀɪ*
┋ ☻ *ᴀɪɪᴍɢ*
┋ ☻ *ɢᴇɴᴇʀᴀᴛᴇɪᴍɢ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷💠

〘 💅𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨🧕🏻 〙

╭─────────────⪼🛰️
┋ ☻ *ʏᴛᴘᴏsᴛ* 
┋ ☻ *ᴀᴘᴋ* 
┋ ☻ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ *ɢᴅʀɪᴠᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
┋ ☻ *sᴘᴏᴛɪғʏ*
┋ ☻ *ғʙ*
┋ ☻ *ɪɢ* 
┋ ☻ *ᴍᴏᴠɪᴇ*
┋ ☻ *sᴏɴɢ* 
┋ ☻ *sᴏɴɢ1*
┋ ☻ *ᴠɪᴅᴇᴏ* 
┋ ☻ *ᴠɪᴅᴇᴏ3*
┋ ☻ *ᴠɪᴅᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏ*
┋ ☻ *ᴘʟᴀʏ2*
┋ ☻ *ᴘʟᴀʏ3*
┋ ☻ *ᴘʟᴀʏᴛ*
┋ ☻ *ᴘʟᴀʏᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏᴜʟᴛʀᴀ*
┋ ☻ *ʏᴛ*
┋ ☻ *ʏᴛᴍᴘ3*
┋ ☻ *ʏᴛᴍᴘ4*
┋ ☻ *ᴛɪᴋᴛᴏᴋ* 
┋ ☻ *ᴛɪᴋᴛᴏᴋ2*
┋ ☻ *ɪᴍɢ* 
┋ ☻ *ʙᴀɪsᴄᴏᴘᴇ*
┋ ☻ *sɪɴʜᴀʟᴀsᴜʙ*
┋ ☻ *ɢᴇɴɪsɪsɪʟᴀ*
┋ ☻ *xɴxxᴅᴏᴡɴ*
┋ ☻ *xᴠᴅʟ*
┋ ☻ *ᴘɪɴᴛᴇʀᴇsᴛ*
┋ ☻ *ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷💠

〘 💅𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨🧕 〙

╭──────── ────⪼🛰️
┋ ◉ *.ᴘʟᴀʏ* 
┋ ◉ *xsᴛᴀʟᴋ*
┋ ◉ *ʏᴛsᴛᴀʟᴋ*
┋ ◉ *ɪɢsᴛᴀʟᴋ*
┋ ◉ *ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ*
┋ ◉ *sᴏɴɢ*
┋ ◉ *.ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
┋ ◉ *ʟʏʀɪᴄs*
┋ ◉ *ɢᴏᴏɢʟᴇ*
┋ ◉ *ɴᴇᴡs*
┋ ◉ *ᴡɪᴋɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷, 💠

*〘 💅𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨🧕🏻 〙

╭─────────────🛰️
┋ ◕ *ᴀʟɪᴠᴇ* 
┋ ◕ *ᴀʟɪᴠᴇ2* 
┋ ◕ *ʟɪᴠᴇ*
┋ ◕ *ʙᴏᴛ*
┋ ◕ *ᴍᴇɴᴜ* 
┋ ◕ *ᴀʟʟᴍᴇɴᴜ* 
┋ ◉ *ʟɪsᴛ*
┋ ◕ *sᴜᴘᴘᴏʀᴛ* 
┋ ◕ *sʏsᴛᴇᴍ* 
┋ ◕ *ᴘɪɴɢ* 
┋ ◕ *ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ *ᴜᴘᴅᴀᴛᴇ*
┋ ◕ *ɪɴғᴏ*
┋ ◕ *ᴀʙᴏᴜᴛ*
┋ ◕ *ᴛɪɴʏᴜʀʟ*
┋ ◕ *ᴏʙғ/ᴏʙғᴜsᴄᴀᴛᴇ*
┋ ◉ *ϙʀᴄᴏᴅᴇ*
┋ ◕ *ʙᴀsᴇ64*
┋ ◕ *ᴅᴇʙᴀsᴇ64*
┋ ◕ *ғᴇᴛᴄʜ / ᴀᴘɪ*
┋ ◕ *ɴᴘᴍɢᴜɪᴅᴇ*
┋ ◕ *ɴᴇᴡs* 
┋ ◕ *ᴡɪᴋɪ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷-💠

〘 🐕𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨🧕〙

╭────────────⪼🛰️
┋ ☛ *ᴘʀᴏᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇʟᴇᴛᴇ*
┋ ☛ *ᴋɪᴄᴋ* 
┋ ☛ *ᴋɪᴄᴋᴀʟʟ*
┋ ☛ *ᴋɪᴄᴋᴀʟʟ2*
┋ ☛ *ᴋɪᴄᴋᴀʟʟ3*
┋ ☛ *ᴋɪᴄᴋ+*
┋ ☛ *ғᴀᴍɪʟʏ* 
┋ ☛ *ᴇxᴏʀ* 
┋ ☛ *ᴘʀᴏᴍᴏᴛᴇsᴛᴀғғ* 
┋ ☛ *ᴀᴅᴅ* 
┋ ☛ *ᴀᴅᴍɪɴs* 
┋ ☛ *ɢᴇᴛᴘɪᴄ* 
┋ ☛ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ☛ *sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ☛ *ᴘᴏʟʟ*
┋ ☛ *ɢɴᴀᴍᴇ* 
┋ ☛ *ᴛᴀɢᴀʟʟ* 
┋ ☛ *ᴛᴀɢᴀᴘᴘ* 
┋ ☛ *ᴄʜᴀɴɴᴇʟ* 
┋ ☛ *ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ☛ *ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ☛ *ɢɪɴғᴏ* 
┋ ☛ *ɢʟɪɴᴋ*
┋ ☛ *ᴜɴʟᴏᴄᴋ*
┋ ☛ *ʟᴏᴄᴋ*
┋ ☛ *ᴍᴜᴛᴇ*
┋ ☛ *ᴜɴᴍᴜᴛᴇ*
┋ ☛ *ɢᴅᴇsᴄ*
┋ ☛ *sᴇᴛsᴜʙᴊᴇᴄᴛ*
┋ ☛ *ɪɴᴠɪᴛᴇ*
┋ ☛ *ᴊᴏɪɴ*join
┋ ☛ *ʀᴇᴠᴏᴋᴇ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢᴅsᴇᴄ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴍᴇᴍʙᴇʀs*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴀʟʟ2*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴀᴅᴍɪɴs*
┋ ☛ *ᴜɴʟᴏᴄᴋɢs*
┋ ☛ *ʟᴏᴄᴋɢs*
┋ ☛ *sᴇɴᴅᴅᴍ*
┋ ☛ *ᴅɪsᴀᴘᴘᴇᴀʀ*
┋ ☛ *ᴀʟʟʀᴇϙ*
┋ ☛ *ᴊᴏɪɴʀᴇϙᴜᴇsᴛs*
┋ ☛ *ʜɪᴅᴇᴛᴀɢ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷💠

〘 💅𝗙𝗨𝗡 𝗠𝗘𝗡𝗨🧕 〙

╭────────────⪼🛰️
┋ ◉ *sϙᴜɪᴅɢᴀᴍᴇ* 
┋ ◉ *ᴋᴏɴᴀᴍɪ* 
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ϙᴜɪᴢ* 
┋ ◉ *ᴇᴍɪx* 
┋ ◉ *ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ* 
┋ ◉ *ᴅɪᴅʏᴏᴜᴋɴᴏᴡ*
┋ ◉ *ᴀᴜʀᴀ* 
┋ ◉ *8ʙᴀʟʟ* 
┋ ◉ *ᴄᴏᴍᴘʟɪᴍᴇɴᴛ* 
┋ ◉ *ʟᴏᴠᴇᴛᴇsᴛ* 
┋ ◉ *ᴇᴍᴏᴊɪ*
┋ ◉ *ᴄʀʏ* 
┋ ◉ *ᴄᴜᴅᴅʟᴇ*
┋ ◉ *ʙᴜʟʟʏ*
┋ ◉ *ʜᴜɢ* 
┋ ◉ *ᴀᴡᴏᴏ* 
┋ ◉ *ʟɪᴄᴋ* 
┋ ◉ *ᴘᴀᴛ* 
┋ ◉ *sᴍᴜɢ* 
┋ ◉ *ʙᴏɴᴋ* 
┋ ◉ *ʏᴇᴇᴛ* 
┋ ◉ *ʙʟᴜsʜ* 
┋ ◉ *ʜᴀɴᴅʜᴏʟᴅ* 
┋ ◉ *ʜɪɢʜғɪᴠᴇ* 
┋ ◉ *ᴡᴀᴠᴇ* 
┋ ◉ *ɴᴏᴍ* 
┋ ◉ *sᴍɪʟᴇ* 
┋ ◉ *ᴡɪɴᴋ* 
┋ ◉ *ʜᴀᴘᴘʏ* 
┋ ◉ *ɢʟᴏᴍᴘ* 
┋ ◉ *ʙɪᴛᴇ* 
┋ ◉ *ᴘᴏᴋᴇ* 
┋ ◉ *ᴄʀɪɴɢᴇ* 
┋ ◉ *ᴅᴀɴᴄᴇ* 
┋ ◉ *ᴋɪʟʟ* 
┋ ◉ *sʟᴀᴘ* 
┋ ◉ *ᴋɪss* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
┋ ◉ *ᴡᴀɪғᴜ*
┋ ◉ *ɴᴇᴋᴏ*
┋ ◉ *ᴍᴇɢᴜᴍɪɴ*
┋ ◉ *ᴅᴏɢ*
┋ ◉ *ᴄᴀᴛ*
┋ ◉ *ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
┋ ◉ *ʙɪʙʟᴇ*
┋ ◉ *sʜɪᴘ*
┋ ◉ *ɪɴsᴜʟᴛ*
┋ ◉ *ғᴀɴᴄʏ*
┋ ◉ *ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┋ ◉ *ᴄʜᴀʀᴀᴄᴛᴇʀ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇs*
┋ ◉ *ʀᴄᴏʟᴏʀ*
┋ ◉ *ʀᴏʟʟ*
┋ ◉ *ᴘɪᴄᴋ*
┋ ◉ *ᴄᴏɪɴғʟɪᴘ*
┋ ◉ *ғʟɪᴘ*
┋ ◉ *ᴅᴀᴛᴇ*
┋ ◉ *ᴛɪᴍᴇɴᴏᴡ*
┋ ◉ *ᴄᴏᴜɴᴛ*
┋ ◉ *ᴄᴏᴜɴᴛx*
┋ ◉ *sʜᴀᴘᴀʀ*
┋ ◉ *ᴄᴀʟᴄᴜʟᴀᴛᴇ*
┋ ◉ *ʀᴀᴛᴇ*
┋ ◉ *ᴄᴏᴜᴘʟᴇ*
┋ ◉ *ғᴀᴍɪʟʏ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷💠

〘 💅𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨🧕🏻 〙

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈⪼🛰️
┋ ☻ *.ᴍᴏᴠɪᴇ*
┋ ☻ *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
┋ ☻ *.ɢɪᴛʜᴜʙ*
┋ ☻ *.ɢᴘᴀꜱꜱ*
┋ ☻ *.ɢɪᴛᴄʟᴏɴᴇ*
┋ ☻ *.ʀᴇᴘᴏ*
┋ ☻ *.ᴅᴇғɪɴᴇ*
┋ ☻ *.ᴜʀʟ*
┋ ☻ *.sᴀᴠᴇ*
┋ ☻ *.ϙᴜᴏᴛᴇ*
┋ ☻ *.sᴛᴀᴛᴜs*
┋ ☻ *.sʀᴇᴘᴏ*
┋ ☻ *.ɴᴘᴍ*
┋ ☻ *ᴄʀᴇᴀᴛᴀᴘɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷💠

〘 💅𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨🧕🏻 〙

╭────────────⪼🛰️
┋ ☻ *ᴘᴅғ* 
┋ ☻ *.ᴋɪss*
┋ ☻ *.ʜᴀɴᴅ*
┋ ☻ *.ʜᴀᴘᴘʏ*
┋ ☻ *.ʜᴇᴀʀᴛ*
┋ ☻ *.ᴀɴɢᴇʀ*
┋ ☻ *.sᴀᴅ*
┋ ☻ *.sʜʏ*
┋ ☻ *.ᴍᴏᴏɴ*
┋ ☻ *.ᴄᴏɴғᴜsᴇᴅ*
┋ ☻ *.ɴɪᴋᴀʟ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷💠

〘 🐕𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 𝗠𝗘𝗡𝗨🧕 〙

╭─────────────⪼🛰️
┋ ☻ *setprefix* 
┋ ☻ *autoreadstatus*
┋ ☻ *setmode*
┋ ☻ *setbotnumber*
┋ ☻ *autovoice*
┋ ☻ *autosticker*
┋ ☻ *autoreply*
┋ ☻ *autoreply*
┋ ☻ *autoreact*
┋ ☻ *welcome*
┋ ☻ *antibad*
┋ ☻ *antibot*
┋ ☻ *antilink*
┋ ☻ *allwaysonline*
┋ ☻ *readcmd*
┋ ☻ *settings*🐕
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷💠

❄️ ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 300+💁🏻‍♀️

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ The Frontierッ
`

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
                        newsletterName: 'Frontier Tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/kingmalvn/KING-DATA/raw/refs/heads/main/autovoice/menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
