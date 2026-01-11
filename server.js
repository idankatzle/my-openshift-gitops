const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>Hellow idan katz </h1><p>Node.js is running on OpenShift.</p>'));
app.listen(8080);
