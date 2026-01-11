const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const dbHost = process.env.DB_HOST || 'Not Connected';
  res.send(`<h1>Database Connection Test</h1><p>Connecting to: ${dbHost}</p>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
