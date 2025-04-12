const { fetchJson } = require("../lib/functions");
const { downloadTiktok } = require("@mrnima/tiktok-downloader");
const { facebook } = require("@mrnima/facebook-downloader");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require("axios");
const { cmd, commands } = require('../command');


cmd({
  pattern: "tiktok",
  alias: ["ttdl", "tiktokdl","tt"],
  react: '📥',
  desc: "Download TikTok videos.",
  category: "download",
  use: ".tiktok <TikTok video URL>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Check if the user provided a TikTok video URL
    const tiktokUrl = args[0];
    if (!tiktokUrl || !tiktokUrl.includes("tiktok.com")) {
      return reply('Please provide a valid TikTok video URL. Example: `.tiktok https://tiktok.com/...`');
    }

    // Add a reaction to indicate processing
    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    // Prepare the API URL
    const apiUrl = `https://api.nexoracle.com/downloader/tiktok-nowm?apikey=free_key@maher_apis&url=${encodeURIComponent(tiktokUrl)}`;

    // Call the API using GET
    const response = await axios.get(apiUrl);

    // Check if the API response is valid
    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ Unable to fetch the video. Please check the URL and try again.');
    }

    // Extract the video details
    const { title, thumbnail, author, metrics, url } = response.data.result;

    // Inform the user that the video is being downloaded
    await reply(`📥 *Downloading TikTok video by @${author.username}... Please wait.*`);

    // Download the video
    const videoResponse = await axios.get(url, { responseType: 'arraybuffer' });
    if (!videoResponse.data) {
      return reply('❌ Failed to download the video. Please try again later.');
    }

    // Prepare the video buffer
    const videoBuffer = Buffer.from(videoResponse.data, 'binary');

    // Send the video with details
    await conn.sendMessage(from, {
      video: videoBuffer,
      caption: `🧕🏻 *ᴛɪᴋᴛᴏᴋ Vɪᴅᴇᴏ ᴅʟ*\n\n` +
        `💅 *Tɪᴛʟᴇ*: ${title || "No title"}\n` +
        `👤 *Aᴜᴛʜᴏʀ*: @${author.username} (${author.nickname})\n` +
        `❤️ *Lɪᴋᴇs*: ${metrics.digg_count}\n` +
        `💬 *Cᴏᴍᴍᴇɴᴛs*: ${metrics.comment_count}\n` +
        `🔁 *Sʜᴀʀᴇs*: ${metrics.share_count}\n` +
        `📥 *Doᴡɴʟᴏᴀᴅs*: ${metrics.download_count}\n\n` +
        `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ The Frontier`,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363398176647533@newsletter',
          newsletterName: '『 Frontier ᴛᴇᴄʜ🪀 』',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

    // Add a reaction to indicate success
    await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error('Error downloading TikTok video:', error);
    reply('❌ Unable to download the video. Please try again later.');

    // Add a reaction to indicate failure
    await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
  }
});

//======== Ig DL ========

cmd({
    pattern: "insta",
    alias: ["igdl", "reel", "ig", "instadl"],
    desc: "Download Instagram reels or image posts",
    category: "download",
    react: "⏳",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply, react }) => {
    try {
        if (!q) return reply("Please provide an Instagram post or reel link.");
        if (!q.includes("instagram.com")) return reply("Invalid Instagram link.");

        const apiUrl = `https://delirius-apiofc.vercel.app/download/igv2?url=${q}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.data) {
            await react("❌"); 
            return reply("Failed to fetch Instagram media.");
        }

        const { username, fullname, caption, likes, comments, followed, download } = data.data;

        const captionText = `📸 *Iɴsᴛᴀɢʀᴀᴍ Posᴛ* 📸\n\n` +
                            `👤 *Usᴇʀ:* ${fullname} (@${username})\n` +
                            `❤️ *Lɪᴋᴇs:* ${likes}\n💬 *Coᴍᴍᴇɴᴛs:* ${comments}\n👥 *Foʟʟᴏᴡᴇʀs:* ${followed}\n` +
                            `📝 *Cᴀᴘᴛɪᴏɴ:*\n${caption || "Nᴏ cᴀᴘᴛɪᴏɴ ᴀᴠᴀɪʟᴀʙʟᴇ."}`;

        for (const media of download) {
            if (media.type === "image") {
                await conn.sendMessage(from, {
                    image: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            } else if (media.type === "video") {
                await conn.sendMessage(from, {
                    video: { url: media.url },
                    caption: captionText,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: mek });
            }
        }

        await react("✅"); // React after successfully sending media
    } catch (e) {
        console.error("Error in Instagram downloader command:", e);
        await react("❌");
        reply(`An error occurred: ${e.message}`);
    }
});


// Facebook-dl

cmd({
  pattern: "fb",
  alias: ["facebook"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  args,
  q,
  reply
}) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return conn.sendMessage(from, { text: "*`Need URL`*" }, { quoted: m });
    }

    await conn.sendMessage(from, {
      react: { text: '⏳', key: m.key }
    });

    const fbData = await facebook(q);
    
    const caption = `╭━━━〔 *CHAHEIN X* 〕━━━⊷\n`
      + `┃▸ *Dᴜʀᴀᴛɪᴏɴ*: ${fbData.result.duration}\n`
      + `╰━━━⪼\n\n`
      + `🌐 *Download Options:*\n`
      + `1️⃣  *SD Qᴜᴀʟɪᴛʏ*\n`
      + `2️⃣  *HD Quᴀʟɪᴛʏ*\n`
      + `🎵 *Audio Options:*\n`
      + `3️⃣  *Aᴜᴅɪᴏ*\n`
      + `4️⃣  *Doᴄᴜᴍᴇɴᴛ*\n`
      + `5️⃣  *Vᴏɪᴄᴇ*\n\n`
      + `↪️ *Reply with the number to download your choice.*`;

    const sentMsg = await conn.sendMessage(from, {
      image: { url: fbData.result.thumbnail },
      caption: caption
    }, { quoted: m });

    const messageID = sentMsg.key.id;

    conn.ev.on("messages.upsert", async (msgData) => {
      const receivedMsg = msgData.messages[0];
      if (!receivedMsg.message) return;

      const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
      const senderID = receivedMsg.key.remoteJid;
      const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

      if (isReplyToBot) {
        await conn.sendMessage(senderID, {
          react: { text: '⬇️', key: receivedMsg.key }
        });

        let videoLinks = fbData.result.links;

        switch (receivedText) {
          case "1":
            await conn.sendMessage(senderID, {
              video: { url: videoLinks.SD },
              caption: "📥 *Downloaded in SD Quality*"
            }, { quoted: receivedMsg });
            break;

          case "2":
            await conn.sendMessage(senderID, {
              video: { url: videoLinks.HD },
              caption: "📥 *Downloaded in HD Quality*"
            }, { quoted: receivedMsg });
            break;

          case "3":
            await conn.sendMessage(senderID, {
              audio: { url: videoLinks.SD },
              mimetype: "audio/mpeg"
            }, { quoted: receivedMsg });
            break;

          case "4":
            await conn.sendMessage(senderID, {
              document: { url: videoLinks.SD },
              mimetype: "audio/mpeg",
              fileName: "Facebook_Audio.mp3",
              caption: "📥 *Audio Downloaded as Document*"
            }, { quoted: receivedMsg });
            break;

          case "5":
            await conn.sendMessage(senderID, {
              audio: { url: videoLinks.SD },
              mimetype: "audio/mp4",
              ptt: true
            }, { quoted: receivedMsg });
            break;

          default:
            reply("🤦🏻‍♀️Baka that's an Invalid option! Please reply with 1, 2, 3, 4, or 5.");
        }
      }
    });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ Error fetching the video. Please try again.");
  }
});

// twitter-dl

cmd({
  pattern: "twitter",
  alias: ["tweet", "twdl"],
  desc: "Download Twitter videos",
  category: "download",
  filename: __filename
}, async (conn, m, store, {
  from,
  quoted,
  q,
  reply
}) => {
  try {
    if (!q || !q.startsWith("https://")) {
      return conn.sendMessage(from, { text: "❌ Please provide a valid Twitter URL." }, { quoted: m });
    }

    await conn.sendMessage(from, {
      react: { text: '⏳', key: m.key }
    });

    const response = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${q}`);
    const data = response.data;

    if (!data || !data.status || !data.result) {
      return reply("⚠️ Failed to retrieve Twitter video. Please check the link and try again.");
    }

    const { desc, thumb, video_sd, video_hd } = data.result;

    const caption = `╭━━━〔 *CHA HAE-IN-MD ᴛᴡɪᴛᴛᴇʀ ᴅʟ* 〕━━━⊷\n`
      + `┃▸ *Dᴜʀᴀᴛɪᴏɴ*: ${fbData.result.duration}\n`
      + `╰━━━⪼\n\n`
      + `🧕 *Download Options:*\n`
      + `1️⃣  *SD Qᴜᴀʟɪᴛʏ*\n`
      + `2️⃣  *HD Quᴀʟɪᴛʏ*\n`
      + `🎵 *Audio Options:*\n`
      + `3️⃣  *Aᴜᴅɪᴏ*\n`
      + `4️⃣  *Doᴄᴜᴍᴇɴᴛ*\n`
      + `5️⃣  *Vᴏɪᴄᴇ*\n\n`
      + `↪️ *Reply with the number to download your choice.*`;

    const sentMsg = await conn.sendMessage(from, {
      image: { url: thumb },
      caption: caption
    }, { quoted: m });

    const messageID = sentMsg.key.id;

    conn.ev.on("messages.upsert", async (msgData) => {
      const receivedMsg = msgData.messages[0];
      if (!receivedMsg.message) return;

      const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
      const senderID = receivedMsg.key.remoteJid;
      const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

      if (isReplyToBot) {
        await conn.sendMessage(senderID, {
          react: { text: '⬇️', key: receivedMsg.key }
        });

        switch (receivedText) {
          case "1":
            await conn.sendMessage(senderID, {
              video: { url: video_sd },
              caption: "📥 *Downloaded in SD Quality*"
            }, { quoted: receivedMsg });
            break;

          case "2":
            await conn.sendMessage(senderID, {
              video: { url: video_hd },
              caption: "📥 *Downloaded in HD Quality*"
            }, { quoted: receivedMsg });
            break;

          case "3":
            await conn.sendMessage(senderID, {
              audio: { url: video_sd },
              mimetype: "audio/mpeg"
            }, { quoted: receivedMsg });
            break;

          case "4":
            await conn.sendMessage(senderID, {
              document: { url: video_sd },
              mimetype: "audio/mpeg",
              fileName: "Twitter_Audio.mp3",
              caption: "📥 *Audio Downloaded as Document*"
            }, { quoted: receivedMsg });
            break;

          case "5":
            await conn.sendMessage(senderID, {
              audio: { url: video_sd },
              mimetype: "audio/mp4",
              ptt: true
            }, { quoted: receivedMsg });
            break;

          default:
            reply("❌ Invalid option! Please reply with 1, 2, 3, 4, or 5.");
        }
      }
    });

  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing your request. Please try again.");
  }
});

// MediaFire-dl

cmd({
  pattern: "mediafire",
  alias: ["mfire", "mfdownload"],
  react: '📥',
  desc: "Download files from MediaFire.",
  category: "download",
  use: ".mediafire <MediaFire URL>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Check if the user provided a MediaFire URL
    const mediafireUrl = args[0];
    if (!mediafireUrl || !mediafireUrl.includes("mediafire.com")) {
      return reply('Please provide a valid MediaFire URL. Example: `.mediafire https://mediafire.com/...`');
    }

    // Add a reaction to indicate processing
    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    // Prepare the Velyn API URL
    const apiUrl = `https://velyn.vercel.app/api/downloader/mediafire?url=${encodeURIComponent(mediafireUrl)}`;

    // Call the Velyn API using GET
    const response = await axios.get(apiUrl);

    // Check if the API response is valid
    if (!response.data || !response.data.status || !response.data.data) {
      return reply('❌ Unable to fetch the file. Please check the URL and try again.');
    }

    // Extract the file details
    const { filename, size, mimetype, link } = response.data.data;

    // Inform the user that the file is being downloaded
    await reply(`📥 *Downloading ${filename} (${size})... Please wait.*`);

    // Download the file
    const fileResponse = await axios.get(link, { responseType: 'arraybuffer' });
    if (!fileResponse.data) {
      return reply('❌ Failed to download the file. Please try again later.');
    }

    // Prepare the file buffer
    const fileBuffer = Buffer.from(fileResponse.data, 'binary');

    // Send the file based on its MIME type
    if (mimetype.startsWith('image')) {
      // Send as image
      await conn.sendMessage(from, {
        image: fileBuffer,
        caption: `📥 *ғɪʟᴇ ᴅᴇᴛᴀɪʟs* 📥\n\n` +
          `🔖 *Nᴀᴍᴇ*: ${filename}\n` +
          `📏 *Sɪᴢᴇ*: ${size}\n\n` +
          `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ THE FRONTIER`,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398176647533@newsletter',
            newsletterName: '『 CHA HAE-IN-MD 』',
            serverMessageId: 143
          }
        }
      }, { quoted: mek });
    } else if (mimetype.startsWith('video')) {
      // Send as video
      await conn.sendMessage(from, {
        video: fileBuffer,
        caption: `📥 *ғɪʟᴇ ᴅᴇᴛᴀɪʟs* 📥\n\n` +
          `🔖 *Nᴀᴍᴇ*: ${filename}\n` +
          `📏 *Sɪᴢᴇ*: ${size}\n\n` +
          `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ THE FRONTIER`,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398176647533@newsletter',
            newsletterName: '『 CHA HAE-IN-MD 』',
            serverMessageId: 143
          }
        }
      }, { quoted: mek });
    } else {
      // Send as document
      await conn.sendMessage(from, {
        document: fileBuffer,
        mimetype: mimetype,
        fileName: filename,
        caption: `📥 *ғɪʟᴇ ᴅᴇᴛᴀɪʟs* 📥\n\n` +
          `🔖 *Nᴀᴍᴇ*: ${filename}\n` +
          `📏 *Sɪᴢᴇ*: ${size}\n\n` +
          `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ The Frontier`,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398176647533@newsletter',
            newsletterName: '『 CHA HAE-IN-MD 』',
            serverMessageId: 143
          }
        }
      }, { quoted: mek });
    }

    // Add a reaction to indicate success
    await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error('Error downloading file:', error);
    reply('❌ Unable to download the file. Please try again later.');

    // Add a reaction to indicate failure
    await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
  }
});


// apk-dl

cmd({
  pattern: "apk",
  alias: ["modapk", "apkdownload"],
  react: '📦',
  desc: "Download APK files using NexOracle API.",
  category: "tools",
  use: ".apk <app name>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Check if the user provided an app name
    const appName = args.join(" ");
    if (!appName) {
      return reply('Please provide an app name. Example: `.apk whatsapp `');
    }

    // Add a reaction to indicate processing
    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    // Prepare the NexOracle API URL
    const apiUrl = `https://api.nexoracle.com/downloader/apk`;
    const params = {
      apikey: 'free_key@maher_apis', // Replace with your API key if needed
      q: appName, // App name to search for
    };

    // Call the NexOracle API using GET
    const response = await axios.get(apiUrl, { params });

    // Check if the API response is valid
    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ Unable to find the APK. Please try again later.');
    }

    // Extract the APK details
    const { name, lastup, package, size, icon, dllink } = response.data.result;

    // Send a message with the app thumbnail and "Downloading..." text
    await conn.sendMessage(from, {
      image: { url: icon }, // App icon as thumbnail
      caption: `📦 *Downloading ${name}... Please wait.*`,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363398176647533@newsletter',
          newsletterName: '『『 CHA HAE-IN-MD 』』',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

    // Download the APK file
    const apkResponse = await axios.get(dllink, { responseType: 'arraybuffer' });
    if (!apkResponse.data) {
      return reply('❌ Failed to download the APK. Please try again later.');
    }

    // Prepare the APK file buffer
    const apkBuffer = Buffer.from(apkResponse.data, 'binary');

    // Prepare the message with APK details
    const message = `📦 *ᴀᴘᴋ ᴅᴇᴛᴀɪʟs*📦:\n\n` +
      `🔖 *Nᴀᴍᴇ*: ${name}\n` +
      `📅 *Lᴀsᴛ ᴜᴘᴅᴀᴛᴇ*: ${lastup}\n` +
      `📦 *Pᴀᴄᴋᴀɢᴇ*: ${package}\n` +
      `📏 *Sɪᴢᴇ*: ${size}\n\n` +
      `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ The Frontier`;

    // Send the APK file as a document
    await conn.sendMessage(from, {
      document: apkBuffer,
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${name}.apk`,
      caption: message,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363398176647533@newsletter',
          newsletterName: '『 CHA HAE-IN-MD 』 ',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

    // Add a reaction to indicate success
    await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error('Error fetching APK details:', error);
    reply('❌ Unable to fetch APK details. Please try again later.');

    // Add a reaction to indicate failure
    await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
  }
});

// G-Drive-DL

cmd({
  pattern: "gdrive",
  alias: ["gdrivedownload", "gdownloader"],
  react: '📥',
  desc: "Download files from Google Drive.",
  category: "download",
  use: ".gdrive <Google Drive URL>",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Check if the user provided a Google Drive URL
    const gdriveUrl = args[0];
    if (!gdriveUrl || !gdriveUrl.includes("drive.google.com")) {
      return reply('Please provide a valid Google Drive URL. Example: `.gdrive https://drive.google.com/...`');
    }

    // Add a reaction to indicate processing
    await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

    // Prepare the NexOracle API URL
    const apiUrl = `https://api.nexoracle.com/downloader/gdrive`;
    const params = {
      apikey: 'free_key@maher_apis', // Replace with your API key if needed
      url: gdriveUrl, // Google Drive URL
    };

    // Call the NexOracle API using GET
    const response = await axios.get(apiUrl, { params });

    // Check if the API response is valid
    if (!response.data || response.data.status !== 200 || !response.data.result) {
      return reply('❌ Unable to fetch the file. Please check the URL and try again.');
    }

    // Extract the file details
    const { downloadUrl, fileName, fileSize, mimetype } = response.data.result;

    // Inform the user that the file is being downloaded
    await reply(`📥 *Downloading ${fileName} (${fileSize})... Please wait.*`);

    // Download the file
    const fileResponse = await axios.get(downloadUrl, { responseType: 'arraybuffer' });
    if (!fileResponse.data) {
      return reply('❌ Failed to download the file. Please try again later.');
    }

    // Prepare the file buffer
    const fileBuffer = Buffer.from(fileResponse.data, 'binary');

    // Send the file based on its MIME type
    if (mimetype.startsWith('image')) {
      // Send as image
      await conn.sendMessage(from, {
        image: fileBuffer,
        caption: `📥 *ғɪʟᴇ ᴅᴇᴛᴀɪʟs* 📥\n\n` +
          `🔖 *Nᴀᴍᴇ*: ${fileName}\n` +
          `📏 *Sɪᴢᴇ*: ${fileSize}\n\n` +
          `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ FRONTIER-X-45H`,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398176647533@newsletter',
            newsletterName: '『 ✦CHA HAE-IN-MD✦ 』',
            serverMessageId: 143
          }
        }
      }, { quoted: mek });
    } else if (mimetype.startsWith('video')) {
      // Send as video
      await conn.sendMessage(from, {
        video: fileBuffer,
        caption: `📥 *ғɪʟᴇ ᴅᴇᴛᴀɪʟs* 📥\n\n` +
          `🔖 *Nᴀᴍᴇ*: ${fileName}\n` +
          `📏 *Sɪᴢᴇ*: ${fileSize}\n\n` +
          `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ FRONTIER-X-45H`,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398176647533@newsletter',
            newsletterName: '『 CHA HAE-IN-MD 』',
            serverMessageId: 143
          }
        }
      }, { quoted: mek });
    } else {
      // Send as document
      await conn.sendMessage(from, {
        document: fileBuffer,
        mimetype: mimetype,
        fileName: fileName,
        caption: `📥 *ғɪʟᴇ ᴅᴇᴛᴀɪʟs* 📥\n\n` +
          `🔖 *Nᴀᴍᴇ*: ${fileName}\n` +
          `📏 *Sɪᴢᴇ*: ${fileSize}\n\n` +
          `> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ THE FRONTIER`,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363398176647533@newsletter',
            newsletterName: '『 CHA HAE-IN-MD 』',
            serverMessageId: 143
          }
        }
      }, { quoted: mek });
    }

    // Add a reaction to indicate success
    await conn.sendMessage(from, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error('Error downloading file:', error);
    reply('❌ Unable to download the file. Please try again later.');

    // Add a reaction to indicate failure
    await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
  }
});
