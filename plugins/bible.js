/*
Project Name : CHA HAE-IN-MD
Creator      : The Frontier-x
Repo         : https://github.com/Frontier-x-45h/CHA-HAE-IN-MD-V1
Support      : wa.me/263788521064
*/


const axios = require("axios");
const { cmd } = require("../command");

// Command: bible
cmd({
    pattern: "bible",
    desc: "Fetch Bible verses by reference.",
    category: "fun",
    react: "π",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // VΓ©rifiez si une rΓ©fΓ©rence est fournie
        if (args.length === 0) {
            return reply(`β οΈ *Please provide a Bible reference.*\n\nπ *Example:*\n.bible John 1:1`);
        }

        // Joindre les arguments pour former la rΓ©fΓ©rence
        const reference = args.join(" ");

        // Appeler l'API avec la rΓ©fΓ©rence
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        // VΓ©rifiez si la rΓ©ponse contient des donnΓ©es
        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;

            // Envoyez la rΓ©ponse formatΓ©e avec des emojis
            reply(
                `π *π½ππ½ππ πππππ πππππΏ!*\n\n` +
                `π *πΉππππππππ:* ${ref}\n` +
                `π *π»πππ:* ${text}\n\n` +
                `ποΈ? *π»ππππππππππ:* ${translation_name}\n\n> Β© CHA HAE-IN-MD ΚΙͺΚΚα΄? `
            );
        } else {
            reply("β? *Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("β οΈ *An error occurred while fetching the Bible verse.* Please try again.");
    }
});
