import replies from "../data/replies.json";

export default function handler(req, res) {
  const q = (req.query.q || "").toLowerCase();

  if (!q) {
    return res.status(400).json({ error: "query missing" });
  }

  const keys = Object.keys(replies);
  const match = keys.find(k => q.includes(k));

  if (!match) {
    return res.json({ reply: "Samajh nahi aaya 😅" });
  }

  const list = replies[match];
  const randomReply = list[Math.floor(Math.random() * list.length)];

  res.json({ reply: randomReply });
}
