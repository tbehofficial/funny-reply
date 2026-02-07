import replies from "../data/replies.json";

export default function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      error: "Query missing",
      example: "/api/reply?q=hello"
    });
  }

  const text = q.toLowerCase();

  // keyword match
  let matchedKey = Object.keys(replies).find(key =>
    text.includes(key)
  );

  if (!matchedKey) {
    return res.json({
      reply: "😄 Samajh nahi aaya, par vibe achhi hai!"
    });
  }

  const options = replies[matchedKey];
  const randomReply =
    options[Math.floor(Math.random() * options.length)];

  res.json({
    input: q,
    reply: randomReply
  });
}
