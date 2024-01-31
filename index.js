const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const adminRouter = require("./routes/AssignedTask");
app.use("/admin", adminRouter);

const db = require("./models");
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });

