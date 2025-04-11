// CHA HAE-IN-MD
const { cmd } = require('../command');
const axios = require('axios');



cmd({
    pattern: "blackbox",
    alias: ['bb', 'ai-chat', 'blackai'],
    react: '🤖',
    desc: "Chat with Blackbox AI",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, reply, args, pushName }) => {
    try {
        // React to show processing
        await m.react("🔍");

        // Check if query is provided
        if (!args[0]) {
            return await reply(`*🤖 BLACKBOX AI ASSISTANT*

Usage: .blackbox <query>

Examples:
.blackbox Who are you?
.blackbox Explain quantum computing
.blackbox Write a python function to sort list

*Tips:*
- Ask clear and specific questions
- Use proper grammar
- Be respectful`);
        }

        // Get full query
        const query = args.join(" ");```

        ```// Send processing message
        const processingMessage = await reply(`🧠 *Processing Query:* \n_"${query}"_\n\n⏳ Thinking...`);

        try {
            // Encode query for URL
            const encodedQuery = encodeURIComponent(query);

            // API Request to Blackbox AI
            const response = await axios.get(`https://bk9.fun/ai/blackbox?q=${encodedQuery}`, {
                timeout: 30000, // 30 seconds timeout
                headers: {
                    'User-Agent': 'Malvin XD AI Assistant'
                }
            });

            // Validate response
            if (!response.data || !response.data.status) {
                return await reply("❌ No response from AI. Please try again.");
            }

            // Extract AI response
            const thenux = response.data.BK9;

            // Attempt to delete processing message with safe error handling
            try {
                if (processingMessage && processingMessage.key) {
                    await conn.sendMessage(from, { delete: processingMessage.key });
                }
            } catch (deleteError) {
                console.log("Message deletion failed:", deleteError);
            }

            // Send AI response
            await conn.sendMessage(from, {
                image: { url: 'https://files.catbox.moe/y65ffs.jpg' },
                text: `🤖 *Blackbox AI Response:*\n\n${thenux}\n\n> 👤 ChahaeinAI`,
                contextInfo: {
                    externalAdReply: {
            title: 'ミ★CHA HAE-IN-MD彡',
            body: 'query',
            mediaType: 1, // Media type for external ad
            thumbnail: { url: 'https://files.catbox.moe/y65ffs.jpg' },
            renderLargerThumbnail: true,
            sourceUrl: "https://github.com/kingmalvn"
                    }
                }
            }, { quoted: mek });

            // React with success
            await m.react("✅");

        } catch (apiError) {
            console.error("Blackbox AI API Error:", {
                message: apiError.message,
                code: apiError.code,
                status: apiError.response?.status
            });
            
            // Detailed error handling
            let errorMessage = "❌ AI conversation failed";
            
            if (apiError.code === 'ECONNABORTED') {
                errorMessage = "❌ Request timed out. Check your internet connection.";
            } else if (apiError.response) {
                switch (apiError.response.status) {
                    case 400:
                        errorMessage = "❌ Baka thers no such command🤦🏻‍♀️.";
                        break;
                    case 403:
                        errorMessage = "❌ Access denied to AI service.";
                        break;
                    case 429:
                        errorMessage = "❌ Oky now I'm just being abused cool down.";
                        break;
                    case 500:
                        errorMessage = "❌ AI service is currently unavailable.";
                        break;
                }
            }

            await reply(errorMessage);
            await m.react("❌");
        }

    } catch (mainError) {
        console.error("Main Blackbox AI Command Error:", mainError);
        await reply("An unexpected error occurred during AI conversation.");
        await m.react("❌");
    }
});
