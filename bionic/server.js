const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST'); 
  next();
});


app.get('/api/pt-job-posts', async (req, res) => {
  try {
    const apiUrl = 'https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth';
    const { data } = await axios.get(apiUrl);
    res.json(data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});


app.post('/api/pt-job-applies', async (req, res) => {
  try {
    const apiUrl = 'https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth';
    const { data } = await axios.post(apiUrl, req.body);
    res.json(data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ error: err.message });
  }
});


const PORT = 3020;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
