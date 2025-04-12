

const { cmd } = require('../command');
let antideleteStatus = {}; // Tracks the ON/OFF status for each chat


cmd({
    pattern: "channel",
    desc: "Get the link to the official WhatsApp channel.",
    react: "📢",
    category: "support",
    use: ".channel",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the channel link inside the command
        const channelLink = "https://whatsapp.com/channel/0029VazncnIBPzjOc2r0Ed3S";

        // Send the channel link to the user
        reply(`For new updates about me🧕 please join my what's app channel:\n\n${channelLink}\n\n> Join us to stay updated with the latest news and announcements🧞‍♂️.`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending channel link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the channel link.");
    }
});
// Command for sending the support group or page link
cmd({
    pattern: "support",
    desc: "Get the link to the support group or page.",
    react: "🧕",
    category: "support",
    use: ".support",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the support link inside the command
        const supportLink = "https://whatsapp.com/channel/0029VazncnIBPzjOc2r0Ed3S";

        // Send the support link to the user
        reply(`Need help 🧕 or have questions ? Join Chahaein support group:\n\n${supportLink}\n\n> Feel free to ask your questions or report issues💁🏻‍♀️.`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending support link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the support link.");
    }
});