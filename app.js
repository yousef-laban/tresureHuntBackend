const express = require("express");
const app = express();
const cors = require("cors");

const thingRoutes = require("./routes/thingRoutes");

app.use(cors());
app.use(express.json());
app.use("/media", express.static("media"));

app.use("/things", thingRoutes);

// Path not Found Middleware
app.use((req, res, next) => {
  next({ status: 404, message: "Path Not Found" });
});

// Error Middleware
app.use((err, req, res, next) => {
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error" });
});

app.listen(8000);
