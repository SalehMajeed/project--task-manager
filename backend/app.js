const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  const db = await connectDB(process.env.MONGO_URI);
  console.log(`Server is listening on port ${port}`);
  console.log(`mongoose working on ${db.connection.port}`);
});
