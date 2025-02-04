const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.json({ message: 'Welcome to the Airport Public API!' });
});

router.get('/flights/status/:flightId', (req, res) => {
   const flightId = req.params.flightId;
   res.json({ message: `Flight ${flightId} status: On Time` });
});

router.get('/hello/:name', (req, res) => {
   const name = req.params.name;
   res.json({ message: `Hello, ${name}!` });
});

router.post('/data', (req, res) => {
   const data = req.body;
   res.json({ message: 'Received data successfully!', data });
});

module.exports = router;
