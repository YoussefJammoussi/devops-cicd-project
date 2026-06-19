const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Backend API is running');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP'
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
