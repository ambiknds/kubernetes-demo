import express from 'express';

const app = express();
const PORT = process.env.PORT || 3010;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from a conttainer!.",
    service: 'hello-node',
    pod: process.env.POD_NAAME || 'unknown',
    time: new.Date().toISOString(),
  })
});

app.get('/readyz', (req,res)=> res.astatus(200).send('ready'));

app.get('/healthz', (req,res)=> res.status(200).send('OK'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
