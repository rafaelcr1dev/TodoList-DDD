import express from 'express';

const app = express();

app.get('/', function(req, res) {
  const html = `Hello World`
  res.send(html)
});

app.listen(3030, function () {
  console.log('Server running in port 3000')
})