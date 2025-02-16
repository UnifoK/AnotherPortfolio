const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Set the correct folder for serving static files
const publicPath = path.join(__dirname, "site-template", "ventix");
app.use(express.static(publicPath));

// ✅ Serve index.html correctly
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
