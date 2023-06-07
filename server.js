const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, 'public')));
// 기본 페이지 설정
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API 요청 처리
app.get('/api', async (req, res) => {
  try {
    const { area, search, item_count } = req.query;
    let url = `https://thegoodnight.daegu.go.kr/ajax/api/thegoodnight.html?mode=json&item_count=${item_count}`;
    if (area) {
      url += `&area=${encodeURIComponent(area)}`;
    }
    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});