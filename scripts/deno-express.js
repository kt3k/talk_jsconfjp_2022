import express from "npm:express";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Deno + Express');
});

app.listen(3000);
