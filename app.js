const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//my Routes
const bookRoutes = require("./Routes/bookings");

app.use("/api", bookRoutes);
app.listen("8000");
