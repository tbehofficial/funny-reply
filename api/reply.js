import replies from "../data/replies.json";

export default function handler(req, res) {
  try {
    const { text } = req.query;

    if (!text) {
      return res.status(200).json({
        reply: "Kuch likho bhai, main mind reader nahi hoon 😅"
      });
    }

    const key = text.toLowerCase().trim();

    // match exact key
    if (replies[key]) {
      const arr = replies[key];
      const randomReply = arr[Math.floor(Math.random() * arr.length)];
      return res.status(200).json({ reply: randomReply });
    }

    // fallback random reply
    const fallback = replies["default"];
    const randomFallback =
      fallback[Math.floor(Math.random() * fallback.length)];

    return res.status(200).json({ reply: randomFallback });

  } catch (err) {
    return res.status(500).json({
      error: "Server crash prevented",
      message: err.message
    });
  }
}
