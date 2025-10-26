export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log("New message:", name, email, message);
    res.status(200).json({ message: "Form received successfully!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
