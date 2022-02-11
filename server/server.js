const path = require("path");
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

const buildPath = path.join(__dirname, "..", "build");

app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log("server is up");
});
