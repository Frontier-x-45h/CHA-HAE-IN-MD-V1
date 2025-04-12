const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "add",
    alias: ["aja"],
    react: "➕",
    desc: "Adds a user to the group.",
    category: "group",
    filename: __filename,
    use: '<number>',
},           
async (conn, mek, m, { from, args, q, isGroup, senderNumber, botNumber, reply }) => {
    try {
        if (!isGroup) return reply("❌ 🤦🏻‍♀️Baka This command can only be used in groups.");

        // Extract bot owner's number
        const botOwner = conn.user.id.split(":")[0];

        // Restrict command usage to the bot owner only
        if (senderNumber !== botOwner) {
            return reply("❌ Bak Only the botz senpai can use this command.");
        }

        // Ensure the bot is an admin
        if (!isBotAdmins) return reply("❌ Baka I need to be an admin to add users.");

        // Validate user input
        if (!q || isNaN(q)) return reply("❌ 🤦🏻‍♀️Baka provide a valid phone number to add.");
        
        const userToAdd = `${q}@s.whatsapp.net`;

        // Attempt to add the user to the group
        let response = await conn.groupParticipantsUpdate(from, [userToAdd], "add");

        // Check if the user was successfully added
        if (response[0].status === 200) {
            reply(`✅ User *${q}* has been added to the group.`);
        } else {
            reply("❌ Failed to add user. Make sure the number is correct and they are not already in the group.");
        }
    } catch (e) {
        console.error("Error adding user:", e);
        reply("❌ An error occurred while adding the user. Please try again.");
    }
});

cmd({
    pattern: "updategdesc",
    alias: ["upgdesc", "gdesc"],
    react: "📜",
    desc: "Change the group description.",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, isAdmins, isBotAdmins, args, q, reply }) => {
    try {
        if (!isGroup) return reply("❌ Baka This command can only be used in groups.");
        if (!isAdmins) return reply("❌ Baka Only group admins can use this command.");
        if (!isBotAdmins) return reply("❌ Baka l need to be an admin to update the group description.");
        if (!q) return reply("❌ Please provide a new group description.");

        await conn.groupUpdateDescription(from, q);
        reply("✅ Group description has been updated.");
    } catch (e) {
        console.error("Error updating group description:", e);
        reply("❌ Failed to update the group description. Please try again.");
    }
});

cmd({
    pattern: "updategname",
    alias: ["upgname", "gname"],
    react: "📝",
    desc: "Change the group name.",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, isAdmins, isBotAdmins, args, q, reply }) => {
    try {
        if (!isGroup) return reply("❌ Baka This command can only be used in groups.");
        if (!isAdmins) return reply("❌ Bska Only group admins can use this command.");
        if (!isBotAdmins) return reply("❌ Baka I need to be an admin to update the group name.");
        if (!q) return reply("❌ Please provide a new group name.");

        await conn.groupUpdateSubject(from, q);
        reply(`✅ Group name has been updated to: *${q}*`);
    } catch (e) {
        console.error("Error updating group name:", e);
        reply("❌ Failed to update the group name. Please try again.");
    }
});

cmd({
    pattern: "kick",
    react: "🥏",
    alias: ["k", "remove"],
    desc: "To Remove a participant from Group",
    category: "group",
    use: '.kick',
    filename: __filename
},
async(conn, mek, m, { from, quoted, isGroup, senderNumber, botNumber, groupAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ Baka This command can only be used in groups.");

        // Ensure only group admins can use this command
        if (!groupAdmins.includes(senderNumber + "@s.whatsapp.net")) {
            return reply("❌ Baka Only group admins can use this command.");
        }

        if (!isBotAdmins) return reply("❌ Baka I need to be an admin to kick members.");

        // Fetch mentioned user or replied user
        let users = quoted ? quoted.sender : (m.mentionedJid ? m.mentionedJid[0] : false);
        if (!users) return reply("❌ *Couldn't find any user in context*");

        // Prevent kicking bot itself
        if (users === botNumber) return reply("❌ I can't kick myself!");

        // Extract bot owner's number
        const botOwner = conn.user.id.split(":")[0];

        // Prevent kicking the owner
        if (users === botOwner + "@s.whatsapp.net") return reply("❌ You cannot kick the bot owner!");

        // Kick the user
        await conn.groupParticipantsUpdate(from, [users], "remove");
        await conn.sendMessage(from, { text: "*Successfully removed* ✔️" }, { quoted: mek });

    } catch (e) {
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        console.log(e);
        reply(`❌ *Error Occurred !!*\n\n${e}`);
    }
});

cmd({
    pattern: "leave",
    alias: ["left", "leftgc", "leavegc"],
    desc: "Leave the group",
    react: "🤦🏻‍♀️",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply
}) => {
    try {

        if (!isGroup) {
            return reply("🤦🏻‍♀️Bska This command can only be used in groups.");
        }
        

        const botOwner = conn.user.id.split(":")[0]; 
        if (senderNumber !== botOwner) {
            return reply("🤦🏻‍♀️Baka Only the bot owner can use this command.");
        }

        reply("Leaving group...");
        await sleep(1500);
        await conn.groupLeave(from);
        reply("Goodbye! 👋");
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});


cmd({
    pattern: "lockgc",
    alias: ["lock"],
    react: "🔒",
    desc: "Lock the group (Prevents new members from joining).",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ Baka This command can only be used in groups.");
        if (!isAdmins) return reply("❌ Baka Only group admins can use this command.");
        if (!isBotAdmins) return reply("❌ Baka l need to be an admin to lock the group.");

        await conn.groupSettingUpdate(from, "locked");
        reply("✅ Damn 🧕Group has been locked. New members cannot join.");
    } catch (e) {
        console.error("Error locking group:", e);
        reply("❌ Failed to lock the group. Please try again.");
    }
});
    


cmd({
    pattern: "mute",
    alias: ["groupmute"],
    react: "🔇",
    desc: "Mute the group (Only admins can send messages).",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, senderNumber, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ Baka This command can only be used in groups.");
        if (!isAdmins) return reply("❌ Baka Only group admins can use this command.");
        if (!isBotAdmins) return reply("❌ Baka I need to be an admin to mute the group.");

        await conn.groupSettingUpdate(from, "announcement");
        reply("✅ 🧕Damn Group has been muted. Only admins can send messages.");
    } catch (e) {
        console.error("Error muting group:", e);
        reply("❌ Failed to mute the group. Please try again.");
    }
});


cmd({
    pattern: "unlockgc",
    alias: ["unlock"],
    react: "🔓",
    desc: "Unlock the group (Allows new members to join).",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ Baka This command can only be used in groups.");
        if (!isAdmins) return reply("❌ Baka Only group admins can use this command.");
        if (!isBotAdmins) return reply("❌ Baka I need to be an admin to unlock the group.");

        await conn.groupSettingUpdate(from, "unlocked");
        reply("✅ 🧕 Damn Group has been unlocked. New members can now join.");
    } catch (e) {
        console.error("Error unlocking group:", e);
        reply("❌ Failed to unlock the group. Please try again.");
    }
});


cmd({
    pattern: "unmute",
    alias: ["groupunmute"],
    react: "🔊",
    desc: "Unmute the group (Everyone can send messages).",
    category: "group",
    filename: __filename
},           
async (conn, mek, m, { from, isGroup, senderNumber, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ Baka This command can only be used in groups.");
        if (!isAdmins) return reply("❌ Baka Only group admins can use this command.");
        if (!isBotAdmins) return reply("❌ Baka I need to be an admin to unmute the group.");

        await conn.groupSettingUpdate(from, "not_announcement");
        reply("✅ 🧕Damn Group has been unmuted. Everyone can send messages.");
    } catch (e) {
        console.error("Error unmuting group:", e);
        reply("❌ Failed to unmute the group. Please try again.");
    }
});










