const { cmd } = require('../command');
const axios = require('axios');

cmd({
  pattern: "xstalk",
  alias: ["twitterstalk", "twtstalk"],
  desc: "Get details about a Twitter/X user.",
  react: "🔍",
  category: "stalk",
  filename: __filename
}, async (conn, m, store, { from, quoted, q, reply }) => {
  try {
    if (!q) {
      return reply("❌ Please provide a valid Twitter/X username.");
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const apiUrl = `https://delirius-apiofc.vercel.app/tools/xstalk?username=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data || !data.status || !data.data) {
      return reply("⚠️ Failed to fetch Twitter/X user details. Ensure the username is correct.");
    }

    const user = data.data;
    const verifiedBadge = user.verified ? "✅" : "❌";

    const caption = `╭━━━〔 *TWITTER/X STALKER* 〕━━━⊷\n`
      + `┇👤 *Nᴀᴍᴇ:* ${user.name}\n`
      + `┇🔹 *Usᴇʀɴᴀᴍᴇ:* @${user.username}\n`
      + `┇✔️ *Vᴇʀɪғɪᴇᴅ:* ${verifiedBadge}\n`
      + `┇👥 *Fᴏʟʟᴏᴡᴇʀs:* ${user.followers_count}\n`
      + `┇👤 *Foʟʟᴏᴡɪɴɢ:* ${user.following_count}\n`
      + `┇📝 *Tᴡᴇᴇᴛs:* ${user.tweets_count}\n`
      + `┇📅 *Joɪɴᴇᴅ:* ${user.created}\n`
      + `┇🔗 *Pʀᴏғɪʟᴇ:* [Click Here](${user.url})\n`
      + `╰━━━⪼\n\n`
      + `> 🔹 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ CHA HAE-IN-MD*`;

    await conn.sendMessage(from, {
      image: { url: user.avatar },
      caption: caption
    }, { quoted: m });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});
