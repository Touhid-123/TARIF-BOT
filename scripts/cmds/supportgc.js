module.exports = {
  config: {
    name: "supportgc",
    version: "1.1",
    author: "Shikaki",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Join the support group chat"
    },
    longDescription: {
      en: "Join the official support group chat"
    },
    category: "𝗝𝗢𝗜𝗡𝗚𝗖",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event, threadsData, getLang, message }) {
    const supportGroupThreadID = "9823569684324819"; // Replace with your support group thread ID
    const botID = api.getCurrentUserID();

    try {
      const { members } = await threadsData.get(supportGroupThreadID);

      // Check if the user is already a member of the support group
      const senderName = event.senderName || (await api.getUserInfo(event.senderID))[event.senderID].name;
      const userAlreadyInGroup = members.some(
        member => member.userID === event.senderID && member.inGroup
      );

      if (userAlreadyInGroup) {
        // Reply with a message indicating that the user is already in the group
        const alreadyInGroupMessage = `
╔════ஜ۩۞۩ஜ═══╗
আপনি ইতিমধ্যেই সমর্থন গ্রুপে আছেন। যদি আপনি এটি খুঁজে না পান, অনুগ্রহ করে আপনার বার্তা অনুরোধ বা স্প্যাম বক্স চেক করুন৷
╚════ஜ۩۞۩ஜ═══╝
        `;
        return message.reply(alreadyInGroupMessage);
      }

      // Add the user to the support group
      await api.addUserToGroup(event.senderID, supportGroupThreadID);

      // Reply with a message indicating successful addition
      const successMessage = `╔════ஜ۩۞۩ஜ═══╗
আপনাকে আমাদের গ্রুপে...
যোগ করা হয়ে-🪄👨🏿‍🌾
╚════ஜ۩۞۩ஜ═══╝
      `;
      return message.reply(successMessage);
    } catch (error) {
      // Handle any errors that occur during the process

      // Reply with a message indicating the failure
      const senderName = event.senderName || (await api.getUserInfo(event.senderID))[event.senderID].name;
      const failedMessage = `
╔════ஜ۩۞۩ஜ═══╗
আমি আপনাকে যোগ করতে পারছি না কারণ আপনার আইডি বার্তা অনুরোধ অনুমোদিত নয় বা আপনার অ্যাকাউন্ট ব্যক্তিগত। অনুগ্রহ করে আমাকে যোগ করুন তারপর আবার চেষ্টা করুন...!!
╚════ஜ۩۞۩ஜ═══╝
      `;
      console.error("Error adding user to support group:", error);
      return message.reply(failedMessage);
    }
  }
};
