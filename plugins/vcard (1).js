

const { cmd } = require('../command');

cmd(
    {
        pattern: "vcard",
        react: "📲",
        desc: "Create a contact card (vCard) from a replied message.",
        category: "private",
        filename: __filename,
    },
    async (conn, mek, m, { quoted, args, reply }) => {
        try {
            // Check if the user provided a name
            if (!args || args.length === 0) {
                return reply("❌ *Invalid format!*\n\n➤ Usage: `.vcard <Name>`\n➤ Example: `.vcard Malvin King`\n\nℹ️ You must provide a name for the contact.");
            }

            // Check if the user replied to a message
            if (!quoted) {
                return reply("❌ *Missing Reply!*\n\n➤ You must reply to a user's message to create their contact.\n➤ Example: Reply to a user's message and type `.vcard Lord Malvin`.");
            }

            // Get the sender's number from the quoted message
            const number = quoted.sender || quoted.participant;
            if (!number) {
                return reply("❌ *Phone Number Not Found!*\n\n➤ The bot was unable to extract the phone number from the replied message.\n➤ Try replying to a valid user message.");
            }

            // Format the phone number
            const cleanNumber = number.replace(/[@s.whatsapp.net]/g, "");

            // Get the contact name from arguments
            const contactName = args.join(" ");

            // Create the vCard format
            const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL;type=CELL;waid=${cleanNumber}:${cleanNumber}\nEND:VCARD`;

            // Send the vCard without any confirmation message
            await conn.sendMessage(m.chat, {
                contacts: {
                    displayName: contactName,
                    contacts: [{ vcard }]
                }
            });
        } catch (error) {
            reply("❌ *An unexpected error occurred!*\n\n➤ Possible reasons:\n1️⃣ WhatsApp blocked vCard sending temporarily.\n2️⃣ The replied message doesn't contain a valid number.\n3️⃣ A bot error occurred.\n\n🔄 *Try again later or contact the bot owner.*");
        }
    }
);