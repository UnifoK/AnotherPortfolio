const express = require("express");
const path = require("path");

const app = express();

// ✅ Serve static files from the correct folder
const publicPath = path.join(__dirname, "site-template", "ventix");
app.use(express.static(publicPath));

// ✅ Serve index.html correctly
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// ✅ Export the app (needed for Vercel)
module.exports = app;
