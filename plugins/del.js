

const { cmd } = require("../command"); // Gestion des commandes
const fs = require("fs"); // Gestion des fichiers
const path = require("path"); // Gestion des chemins de fichiers

cmd({
  pattern: "delete",
  react: "🗑️",
  alias: ["del", "dlt"],
  desc: "Delete the bot's messages or other messages (requires admin for others).",
  category: "group",
  use: '.del',
  filename: __filename
},
async (conn, mek, m, { 
  from, 
  quoted, 
  isAdmins, 
  isBotAdmins, 
  isOwner, 
  sender 
}) => {
  try {
    // Vérifier si un message est cité
    if (!quoted) {
      return await conn.sendMessage(from, { text: "🤦🏻‍♀️Baka Please reply to a message to delete it." }, { quoted: m });
    }

    // Construire la clé pour supprimer le message
    const key = {
      remoteJid: from, // ID du groupe ou du chat
      fromMe: quoted.fromMe, // Vérifie si le message appartient au bot
      id: quoted.id, // ID du message cité
      participant: quoted.sender // Expéditeur du message cité
    };

    // Vérifier si l'utilisateur est administrateur ou propriétaire
    if (!isAdmins && !isOwner) {
      return await conn.sendMessage(from, { text: "🤦🏻‍♀️Baka Only admins or the owner can delete messages." }, { quoted: m });
    }

    // Supprimer le message si le bot ou l'owner l'a envoyé
    if (quoted.fromMe || sender === isOwner) {
      return await conn.sendMessage(from, { delete: key });
    }

    // Vérifier si le bot est administrateur pour supprimer les messages des autres dans un groupe
    if (m.isGroup) {
      if (!isBotAdmins) {
        return await conn.sendMessage(from, { text: "🤦🏻‍♀️Baka I'm not admin hence you can't make me delete this love." }, { quoted: m });
      }
      // Supprimer le message
      return await conn.sendMessage(from, { delete: key });
    }

    // Si en privé et le message n'appartient pas au bot
    return await conn.sendMessage(from, { text: "❌ I can only delete my messages in private chats." }, { quoted: m });
  } catch (e) {
    console.error("Error in delete command:", e);
  }
});
