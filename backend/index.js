const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello GROUP #4 from backend!",
  });
});

module.exports = app;
