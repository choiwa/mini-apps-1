const express = require('express');
const app = express();

app.use(express.static('public'))

app.use('', (req, res, next)=> {
  console.log(req.url);
  next();
})

app.get('/', (req, res) => res.send('hello world'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
