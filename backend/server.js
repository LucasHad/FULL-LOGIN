const https = require("https");
const app = require("./app");
const fs = require("fs");
const PORT = process.env.PORT || 8000;

const server = https.createServer(
  { cert: fs.readFileSync("./cert.pem"), key: fs.readFileSync("./key.pem") },
  app
);

server.listen(PORT, () => console.log(`running on port ${PORT}`));
