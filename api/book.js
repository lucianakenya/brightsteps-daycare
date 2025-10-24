let bookings = [];
 
export default function handler(req, res) {
  if (req.method === 'POST') {
    bookings.push(req.body);
    res.status(200).json({ message: 'Booking received!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}