const express = require("express"),
 app = express(),
 sequelize = require('./config/connection'),
 cors = require('cors'),
port =process.env.Port || 5001


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
      origin: "*",
    })
  );

app.disable("x-powered-by");
app.use(express.static(__dirname + "/public/"));

// routes
const users = require("./routers/users")
const certifications = require("./routers/certifications")
const courses = require("./routers/courses")

app.use("/api/v1/users" , users)
app.use("/api/v1/courses" , courses)
app.use("/api/v1/certifications" , certifications)

app.get("/.*/", (req, res) => {
  res.sendFile(__dirname, "/public/index.html");
});
app.listen( port ,async () => {
    console.log(`app is listen on port ${port}`);
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} )