const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { db } = require("./config/db.js");
const { userRoute } = require("./routes/User.Route.js");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
db();

app.use("/api/user", userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
