const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

// variables
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// if (process.env.NODE_ENV == "production") {
//     app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client/build/index.html")));
// }

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
