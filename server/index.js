const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});