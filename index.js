require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const askLlama = require('./openrouter');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const message = req.body.message?.text || '';
  const sender = req.body.sender || '';

  const reply = await askLlama(message);

  console.log(`[${sender}]: ${message}`);
  console.log(`[BOT]: ${reply}`);

  res.json({ reply }); // Nanti kamu kirim ke WhatsApp API dari sini
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));
