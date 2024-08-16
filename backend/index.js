require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const projectRoutes = require("./routes/project.routes");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("server running...");
});

app.use("/projects", projectRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("server running on port 3000...");
});
