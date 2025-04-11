const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "mp4", 
    alias: ["video", "song"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "download", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `
╭━━━〔 *CHA HAE-IN-MD* 〕━━━┈⊷🧕🏻
┊▸╭───────────
┊▸┊๏ *⛩️ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ🍷*
┊▸╰───────────···๏💅
╰────────────┈⊷
╭─┄┄──┄┄──┄┄───⪼
┇ℹ️ *ᴛɪᴛᴛʟᴇ* -  ${yts.title}
┇⏳ *ᴅᴜʀᴀᴛɪᴏɴ* - ${yts.timestamp}
┇👀 *ᴠɪᴇᴡs* -  ${yts.views}
┇👤 *ᴀᴜᴛʜᴏʀ* -  ${yts.author.name}
┇🖇️ *ʟɪɴᴋ* -  ${yts.url}
╰┈┈┈┈┈┈┈┈┈┈┅┄┄┄┄┄┄┄⪼

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ THE FRONTIER LORD`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `> *${yts.title}*\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ♡*`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
       
// play

cmd({ 
     pattern: "mp3", 
     alias: ["ytdl3", "play"], 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "download", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => 
     
     { try { if (!q) return await reply("Please provide a YouTube URL or song name.");

const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No results found!");
    
    let yts = yt.results[0];  
    let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
    
    let response = await fetch(apiUrl);
    let data = await response.json();
    
    if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Please try again later.");
    }
    
    let ytmsg = `╭━━━〔 *CHA HAE-IN-MD* 〕━━━┈⊷
┊▸╭───────────
┊▸┊๏ *🧕🏻sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ💅*
┊▸╰───────────···๏⛸️
╰───────────┈⊷
╭─┄┄──┄┄──┄┄───⪼💠
┇ℹ️ *ᴛɪᴛᴛʟᴇ* -  ${yts.title}
┇⏳ *ᴅᴜʀᴀᴛɪᴏɴ* - ${yts.timestamp}
┇👀 *ᴠɪᴇᴡs* -  ${yts.views}
┇👤 *ᴀᴜᴛʜᴏʀ* -  ${yts.author.name}
┇🖇️ *ʟɪɴᴋ* -  ${yts.url}
╰┈┈┈┈┈┈┈┈┈┈┅┄┄┄┄┄┄┄⪼🧕🏻

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ The Frontier-♡*`;



// Send song details
    await conn.sendMessage(from, { image: { url: data.result.image || '' }, caption: ytmsg }, { quoted: mek });
    
    // Send audio file
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
    
    // Send document file
    await conn.sendMessage(from, { 
        document: { url: data.result.downloadUrl }, 
        mimetype: "audio/mpeg", 
        fileName: `${data.result.title}.mp3`, 
        caption: `> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ The Frontier ᴋɪɴɢ ♡*`
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply("An error occurred. Please try again later.");
}

});
