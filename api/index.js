const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4100;

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./krakow-todo-1eca0a59f74c.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

app.use(bodyParser.json());
app.use(cors());

app.get('/items', async (req, res) => {
  const snapshot = await db.collection('items').get();
  const items = snapshot.docs.map(doc => doc.data());

  res.send({
    items
  });
});

app.post('/item', async (req, res) => {
  const item = req.body.item;

  const itemsCollection = db.collection('items');
  await itemsCollection.doc(item.id).set(item);

  res.send({
    status: "ok"
  });
});

app.delete("/item/:itemId", async (req, res) => {
  const itemId = req.params.itemId;

  await db.collection('items').doc(itemId).delete();

  res.send({
    status: "ok"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});