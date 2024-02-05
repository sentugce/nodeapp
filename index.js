import express from "express";
import cors from "cors";
import userRouter from "./routes/users.js";
import postgresClient from "./config/db.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());//body-parser görevi görür

app.use(cors({
  origin: 'http://localhost:8080',
}));
app.use('/', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  postgresClient.connect(err => {
    if (err) {
      console.log("connection error", err.stack);
    } else {
      console.log("db.connection success");
    }
  });
});