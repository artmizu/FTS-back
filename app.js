const express = require('express');
const app = express();
const api = express();


api.get('/', (req, res) => {
  res.json({
    key: 213
  })
})

app.use('/api', api);
app.listen(4001);