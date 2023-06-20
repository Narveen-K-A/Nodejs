require('dotenv').config(); 
const express = require('express');
const routes = require('./routers/sample-route');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})