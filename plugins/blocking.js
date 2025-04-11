const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "block1",
    desc: "blocking contact.",
    category: "user",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

 var litemd = ['263788521064', '263789699200','263784672753']
		if (litemd.includes(senderNumber)) {
 
  try{


////FUNCTIONS✅️✅️///////

m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
 
////FUNCTIONS✅️✅️////////

if(await m.isGroup) return await m.reply("_It's not a group command !_");

let dl = await conn.sendMessage(m.me, {
            text: "_User Blocked !_"
        }, {
            quoted: mek
        })

let hho = m.chat;

await conn.updateBlockStatus(hho, "block")

  

}catch(e){
console.log(e)
reply(`${e}`)
}}
})



cmd({
    pattern: "unblock1",
    desc: "unblocking contact.",
    category: "user",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

 var litemd = ['263788521064', '263789699200','263784672753']
		if (litemd.includes(senderNumber)) {
 
  try{


////FUNCTIONS✅️✅️////////

m.me = conn.user.id.includes(':') ? conn.user.id.split(':')[0]+'@s.whatsapp.net' : client.user.id;
 
////FUNCTIONS✅️✅️////////

if(await m.isGroup) return await m.reply("_It's not a group command !_");

let dl = await conn.sendMessage(m.me, {
            text: "_User Unblocked !_"
        }, {
            quoted: mek
        })

let hho = m.chat;

await conn.updateBlockStatus(hho, "unblock")

  

}catch(e){
console.log(e)
reply(`${e}`)
}}
})
