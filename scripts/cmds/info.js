const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "𝐎𝐰𝐧𝐞𝐫",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = "亗 ɱʀ ƬʌʀᎥʆ Ƴt✓𝐱130";
		const ownAge = "『 16+』";
		const messenger = "https://m.me/Mr.tarif.yt.x130";
		const authorFB = "https://www.facebook.com/Mr.tarif.yt.x130";
		const authorNumber = "‣𒁍01615796682 ";
		const Status = "Single Pro Max";
		const urls = [
"https://i.imgur.com/XDEDBGW.jpeg",
"https://i.imgur.com/iwmKPKh.mp4",
"",
""
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `‣𒁍❏✓𝐁𝐨𝐭✓𝐀𝐧𝐝✓𝐎𝐰𝐧𝐞𝐫✓𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✓❏
╭─❏Ⴆσƚ ɳαɱҽ : 
╰‣❏ 𝐃𝐫𝐚𝐦𝐚 𝐐𝐮𝐞𝐞𝐧
╰‣❏✓𝐁𝐎𝐓 𝐒𝐲𝐬𝐓𝐞𝐦 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.GoatBot.config.prefix}
╰‣❏𝐎𝐰𝐧𝐞𝐫 𝐍𝐚𝐦𝐞 : ${𝐃𝐫𝐚𝐦𝐚 𝐤𝐢𝐧𝐠 𝐓𝐎𝐔𝐇𝐈𝐃}
╰‣❏𝐀𝐠𝐞 : ${18+}
╰‣❏𝐑𝐞𝐥𝐚𝐓𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : ${𝐒𝐢𝐧𝐠𝐥𝐞 𝐫𝐞 𝐯𝐚𝐢}
╰‣❏𝐖𝐩 : ${01707736554}
╰‣❏𝐅𝐚𝐜𝐞𝐁𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : ${https://www.facebook.com/ayan.official.robot.v.3.1?mibextid=ZbWKwL}
╰‣❏𝐃𝐚𝐭𝐞 : ${11/03/2006}
╰‣❏𝐍𝐨𝐰 𝐓𝐢𝐦𝐞 : ${time}
╰‣❏𝐍𝐧𝐲 𝐡𝐞𝐥𝐩 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 : ${messenger}
╰‣❏𝐁𝐎𝐓 𝐢𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 : ${uptimeString}
╭─𝐓𝐠: https://t.me/error
╰‣❏𝐈𝐧𝐬𝐓𝐚: ×××
╰‣❏𝐂𝐚p𝐂𝐮𝐭 : 𝐍𝐚𝐢 𝐕𝐚𝐠
╰‣❏𝐓𝐢𝐤𝐓𝐨𝐤 : 𝐏𝐫𝐨𝐭𝐲𝐛𝐨𝐧𝐝𝐢-𝐍𝐚 𝐀𝐦𝐢
╰‣❏𝐘𝐨𝐮𝐓𝐮𝐛𝐞 : 𝐀𝐣𝐤𝐞 𝐧𝐚𝐢 𝐛𝐨𝐥𝐞
\‣𝐃𝐫𝐚𝐦𝐚 𝐐𝐮𝐞𝐞𝐧/𝐃𝐫𝐚𝐦𝐚 𝐊𝐢𝐧𝐠`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
