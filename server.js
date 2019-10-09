const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();
app.get("/", (req, res) => res.send("API Running"));

//initialize middleware
app.use(express.json({ extended: false }));
//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Sever started on port ${PORT}`);
});
