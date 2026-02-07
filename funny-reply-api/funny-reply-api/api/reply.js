import replies from "../data/replies.json";

let lastReply = {};

export default function handler(req, res) {
  const msg = (req.query.msg || "").toLowerCase().trim();

  if (!msg) {
    return res.json({ reply: "😄 Kuch likho to sahi!" });
  }

  const matched = replies.filter(r => r.msg === msg);

  if (matched.length === 0) {
    return res.json({
      reply: "😂 Ye group serious hai par tum funny ho!"
    });
  }

  let pick;
  const prev = lastReply[msg];

  for (let i = 0; i < 5; i++) {
    pick = matched[Math.floor(Math.random() * matched.length)];
    if (pick.reply !== prev || Math.random() < 0.3) break;
  }

  lastReply[msg] = pick.reply;
  res.json({ reply: pick.reply });
}
