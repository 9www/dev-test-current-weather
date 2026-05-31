const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Weather API server is running",
  });
});

app.get("/api/weather", (req, res) => {
  res.json({
    location: "Hong Kong",
    weather: "Cloudy",
    temperature: 25,
    unit: "C",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
