import replies from "../data/replies.json";

export default function handler(req, res) {
  try {
    const text = (req.query.text || "").toLowerCase();

    let bucket = "default";

    if (text.includes("hello") || text.includes("hi")) {
      bucket = "greetings";
    } else if (text.includes("hack") || text.includes("password")) {
      bucket = "hacker";
    } else if (text.includes("lol") || text.includes("fun")) {
      bucket = "funny";
    }

    const arr = replies[bucket] || replies["default"];
    const reply = arr[Math.floor(Math.random() * arr.length)];

    res.status(200).json({ reply });
  } catch (e) {
    res.status(200).json({
      reply: "System thoda busy hai, baad me try karo 😅"
    });
  }
}
