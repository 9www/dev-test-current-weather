const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weather.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Weather API server is running",
  });
});

app.use("/api/weather", weatherRoutes);

module.exports = app;
