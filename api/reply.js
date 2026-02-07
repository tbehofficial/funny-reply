export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Funny Reply API is working 😂"
  });
}
