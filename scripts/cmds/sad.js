module.exports = {
  config: {
    name: "sad",
    version: "7.0",
    author: "𝙭𝟏𝟑𝟎",
    countDown: 5,
    role: 0,
    shortDescription: "all video ðŸ“·",
    longDescription: "",
    category: "Video",
    guide: "{pn}"
  },
   onStart: async function ({ message }) {
   var TARIF= ["https://i.imgur.com/3a89xgz.mp4",
"https://i.imgur.com/Iye3ecy.mp4",
"https://i.imgur.com/3pPO0Yy.mp4",
"https://i.imgur.com/xYVg7lS.mp4",
"https://i.imgur.com/lVTkI6v.mp4",
"https://i.imgur.com/k3TFRD4.mp4",
"https://i.imgur.com/yi6LBSB.mp4",
"https://i.imgur.com/gReT9Ub.mp4",
"https://i.imgur.com/wfwFCa5.mp4",
"https://i.imgur.com/wfwFCa5.mp4",
"https://i.imgur.com/BsgumYH.mp4",
"https://i.imgur.com/zg4uJzA.mp4",
"https://i.imgur.com/BsgumYH.mp4",
"https://i.imgur.com/zg4uJzA.mp4",
"https://i.imgur.com/7N1uXXf.mp4",
"https://i.imgur.com/8xsgKgm.mp4",
"https://i.imgur.com/IwdBvc9.mp4",
"https://i.imgur.com/pFwbSeQ.mp4",
"",
"",
"",
"",
"",
"",
"",
]

let msg = TARIF[Math.floor(Math.random()*TARIF.length)]
message.send({
  body: 'sad💔❤️‍🩹',attachment: await global.utils.getStreamFromURL(msg)
})
}
     }
