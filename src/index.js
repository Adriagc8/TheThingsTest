const express = require("express");
const fs = require('node:fs/promises');
const routes = require("./routes");

const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
routes.forEach(({ url, auth, filePath }) => {
  app.use(url, auth, require(filePath).expressRouter);
});

// initialize the DB
fs.appendFile('users.json','[]');

app.listen(process.env.PORT, () => {
console.log(`App running on port ${process.env.PORT}...`);
});  