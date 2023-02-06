const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4100;

const items = [
  { id: "id1", value: "first item", checked: false },
  { id: "id2", value: "second item", checked: false },
];

app.use(bodyParser.json());
app.use(cors());

app.get('/items', (req, res) => {
  res.send({
    items
  });
});

app.post('/item', (req, res) => {
  const item = req.body.item;
  console.log({body: req.body});

  items.push(item);

  res.send({
    status: "ok"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});