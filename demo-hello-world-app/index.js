const express = require('express');
const promClient = require('prom-client');

const app = express();
const port = 3000;

const counter = new promClient.Counter({
  name: 'hello_world_requests',
  help: 'Number of Hello World API requests',
});

app.get('/', (req, res) => {
  counter.inc();
  res.send('Hello, World!');
});

app.get('/metrics', (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  promClient.register.metrics().then(metrics => {
    res.end(metrics);
  }).catch(err => {
    res.status(500).end(err);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
