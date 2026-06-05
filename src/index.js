const express = require('express');

const {serverConfig} = require('./config');

const app = express();

const apiRoutes = require('./routes');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api", apiRoutes)


app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});