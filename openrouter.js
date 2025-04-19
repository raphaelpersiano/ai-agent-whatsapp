const axios = require('axios');

async function askLlama(prompt) {
  const res = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
    model: "meta-llama/llama-4-7b-chat",
    messages: [
      {
        role: "system",
        content: "Kamu adalah AI sales agent dari Skorlife. Tugasmu menjelaskan produk cek skor kredit, status kolektabilitas, dan pengajuan KPR."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return res.data.choices[0].message.content;
}

module.exports = askLlama;
