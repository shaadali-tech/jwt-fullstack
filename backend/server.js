require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Auth Server Running");
});
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to Dashboard",
    user: req.user,
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
