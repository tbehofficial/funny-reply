import replies from "../data/replies.json";

export default function handler(req, res) {
  const q = (req.query.q || "").toLowerCase();

  let answer = "Samajh nahi aaya 😅";

  for (const key in replies) {
    if (q.includes(key)) {
      const list = replies[key];
      answer = list[Math.floor(Math.random() * list.length)];
      break;
    }
  }

  res.status(200).json({
    question: q,
    reply: answer
  });
}
