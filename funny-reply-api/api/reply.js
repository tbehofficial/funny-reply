import replies from "../data/replies.json";

export default function handler(req, res) {
  try {
    const { q } = req.query;

    // ❌ agar query nahi hai
    if (!q) {
      return res.status(400).json({
        error: "Query missing",
        example: "/api/reply?q=hello"
      });
    }

    const text = q.toLowerCase().trim();

    let matchedReplies = [];

    // 🔍 keyword match
    for (const key in replies) {
      if (text.includes(key)) {
        matchedReplies = replies[key];
        break;
      }
    }

    // 🤡 agar match nahi mila
    if (matchedReplies.length === 0) {
      matchedReplies = [
        "Bhai ye kya bol diya 😆",
        "Samajh nahi aaya, par sun ke acha laga 😂",
        "Ye bhi theek hai, aage bolo 😎",
        "Bot confuse ho gaya 🤯 thoda easy bolo"
      ];
    }

    // 🎲 random reply
    const randomReply =
      matchedReplies[Math.floor(Math.random() * matchedReplies.length)];

    return res.status(200).json({
      input: q,
      reply: randomReply
    });

  } catch (err) {
    return res.status(500).json({
      error: "Server error",
      details: err.message
    });
  }
}
