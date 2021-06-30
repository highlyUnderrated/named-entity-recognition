// IMPORTS
const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs")
// UTILITIES
const properties = require("./util/propertiesReader/propertiesReaderUtil");

// DEFINING ENVIRONMENT CONFIG
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

//OPTIONS
const options = {
    key: fs.readFileSync("./certs/private-key.pem"),
    cert: fs.readFileSync("./certs/public-cert.pem")
};

// ROUTES
const nlpRouter = require("./routes/api/nlp");
app.use('/nlp', nlpRouter);

// HTTPS SERVER
const port = properties.get("PORT") || 5000;
https.createServer(options, app).listen(port, () => {
    console.log("HTTPS Server is running on port:" + port);
});