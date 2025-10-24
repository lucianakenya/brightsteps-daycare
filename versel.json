
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
 
let bookings = [];
 
app.post('/book', (req, res) => {
  bookings.push(req.body);
  res.send({ message: 'Booking received!' });
});
 
app.get('/bookings', (req, res) => {
  res.send(bookings);
});
 
app.listen(3000, () => console.log('Server running on port 3000'));