import replies from "../data/replies.json";

export default function handler(req, res) {
  const q = (req.query.q || "").toLowerCase().trim();

  let matchedReplies = null;

  // 🔥 keyword matching
  for (const key in replies) {
    if (q.includes(key)) {
      matchedReplies = replies[key];
      break;
    }
  }

  // ❌ agar kuch match nahi mila
  if (!matchedReplies) {
    matchedReplies = replies["default"];
  }

  // 🎲 random reply
  const reply =
    matchedReplies[Math.floor(Math.random() * matchedReplies.length)];

  res.status(200).json({ reply });
}
