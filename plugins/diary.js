

const fs = require("fs");
const path = require("path");
const { cmd } = require("../command");

const diaryFile = path.join(__dirname, "../𝖽𝖺𝗍𝖺/diary.json");
let diaries = fs.existsSync(diaryFile) ? JSON.parse(fs.readFileSync(diaryFile, 'utf8')) : {};

// Function to save diaries to file
const saveDiaries = () => {
    fs.writeFileSync(diaryFile, JSON.stringify(diaries, null, 2));
};

// URL of the image (replace with a valid URL)
const DIARY_IMG = "https://files.catbox.moe/tdffj6.jpg"; 

// ---------------------
// .diary command (open or create diary)
// ---------------------
cmd({
    pattern: "diary",
    desc: "Open or create a secret diary (Owner only).",
    category: "owner1",
    filename: __filename
}, async (conn, mek, m, { reply, q, from, isOwner, sender }) => {
    // Check if the user is the owner
    if (!isOwner) return reply("❌ Only my senpai can use this command.");

    const userId = m.sender;

    if (!diaries[userId]) {
        if (!q) {
            return reply("📖 Baka you don't have a diary yet. To create one, use:\n\n`.diary yourpassword`");
        }
        diaries[userId] = { password: q.trim(), entries: [] };
        saveDiaries();
        return reply(`✅ Your secret diary has been created!\nTo add an entry, use \`.setdiary your message\`\nTo open your diary, use \`.diary yourpassword\``);
    }

    if (!q) {
        return reply("🔒 You already have a diary. To open it, enter your password like this:\n\n`.diary yourpassword`");
    }

    if (q.trim() !== diaries[userId].password) {
        return reply("❌ Incorrect password! Please try again.");
    }

    if (diaries[userId].entries.length === 0) {
        return reply("📖 Your diary is empty. Add entries using `.setdiary your message`.");
    }

    let formattedInfo = `📖 *Your Diary Entries:*\n\n`;
    diaries[userId].entries.forEach((entry) => {
        formattedInfo += `📅 *${entry.date}* 🕒 *${entry.time}*\n📝 ${entry.text}\n\n`;
    });

    // Send the image with the diary entries
    await conn.sendMessage(from, {
        image: { url: DIARY_IMG },
        caption: formattedInfo,
        contextInfo: { 
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363398176647533@newsletterr',
                newsletterName: 'CHAHAEIN 𝐃𝐈𝐀𝐑𝐘',
                serverMessageId: 143
            }
        }
    }, { quoted: mek });
});

// ---------------------
// .setdiary command (add a new diary entry)
// ---------------------
cmd({
    pattern: "setdiary",
    desc: "Write a new diary entry (Owner only).",
    category: "owner1",
    filename: __filename
}, async (conn, mek, m, { reply, q, isOwner, sender }) => {
    if (!isOwner) return reply("❌ Only my senpai can use this command.");
    const userId = m.sender;
    if (!diaries[userId]) {
        return reply("❌ You don't have a diary. Create one using `.diary yourpassword`.");
    }
    if (!q) {
        return reply("✍️ Please provide the text you want to add to your diary.");
    }

    const now = new Date();
    const date = now.toLocaleDateString('fr-FR'); // Date format (France)
    const time = now.toLocaleTimeString('fr-FR', { hour12: false }); // 24h format

    diaries[userId].entries.push({ date, time, text: q.trim() });
    saveDiaries();

    reply("✅ Your diary entry has been saved!");
});

// ---------------------
// .resetdiary command (delete all diary entries)
// ---------------------
cmd({
    pattern: "resetdiary",
    desc: "Reset your diary (delete all entries) (Owner only).",
    category: "owner1",
    filename: __filename
}, async (conn, mek, m, { reply, q, isOwner, sender }) => {
    if (!isOwner) return reply("❌ Only my senpai can use this command.");
    const userId = m.sender;

    if (!diaries[userId]) {
        return reply("❌ You don't have a diary to reset.");
    }

    if (!q) {
        return reply("⚠️ Baka to reset your diary, use `.resetdiary yourpassword` to confirm your identity.");
    }

    if (q.trim() !== diaries[userId].password) {
        return reply("❌ Incorrect password! Diary reset aborted.");
    }

    delete diaries[userId];
    saveDiaries();

    reply("✅ Your diary has been successfully reset!");
});

// ---------------------
// .resetpassword command (reset diary password; Owner only)
// ---------------------
const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
let resetRequests = {};

cmd({
    pattern: "resetpassword",
    desc: "Reset your diary password (Owner only).",
    category: "owner1",
    filename: __filename
}, async (conn, mek, m, { reply, q, isOwner, sender }) => {
    if (!isOwner) return reply("❌ Only the bot owner can use this command.");
    const userId = m.sender;

    if (!diaries[userId]) {
        return reply("❌ You don't have a diary. Create one using `.diary yourpassword`.");
    }

    // If no argument is provided, send a reset code
    if (!q) {
        const resetCode = generateCode();
        // Store the reset code with an expiration time of 5 minutes
        resetRequests[userId] = { code: resetCode, expires: Date.now() + 5 * 60 * 1000 };
        
        await conn.sendMessage(userId, { 
            text: `🔐 Your password reset code: *${resetCode}*\n\nThis code expires after 5 minutes.\nEnter this code with \'.resetpassword *code* newpassword\' to confirm.` 
        });
        return reply("📩 A reset code has been sent to your private chat. Use it to reset your password.");
    }

    const args = q.split(" ");
    if (args.length !== 2) {
        return reply("⚠️ Incorrect format! Use:\n\n`.resetpassword code newpassword`");
    }

    const [code, newPassword] = args;
    if (!resetRequests[userId] || resetRequests[userId].code !== code || Date.now() > resetRequests[userId].expires) {
        return reply("❌ Invalid or expired code! Request a new one with `.resetpassword`.");
    }

    diaries[userId].password = newPassword.trim();
    saveDiaries();
    delete resetRequests[userId];

    reply("✅ Your diary password has been successfully reset!");
});
