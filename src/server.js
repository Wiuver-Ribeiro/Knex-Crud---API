const express = require('express');
const app = express();

const routes = require('./routes');
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({error:error.message})
})

app.listen(3333, () => console.log('Server is running'));
