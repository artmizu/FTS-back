const express = require('express');
const app = express();
const api = express();

const { search:findUser, get:getUserList } = require('./query/user');
const { search:findGame, get:getGameList } = require('./query/game');

app.get('/', (req, res) => {
  res.json({'status': 'ok' });
});

api.use('*', (req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  next();
});

api.get('/user', async (req, res) => {
  let responseData = req.query.search ? await findUser(req.query.search) : await getUserList();
  res.json(responseData);
});

api.get('/game', async (req, res) => {
  let responseData = req.query.search ? await findGame(req.query.search) : await getGameList();
  res.json(responseData);
});

app.use('/api', api);
app.listen(4001);