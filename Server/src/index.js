import express from "express";
import dbConnect from "../configs/connectDB.js";
import { config } from "dotenv";
config();
import cors from "cors";
import initRout from "../router/index.js";

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

initRout(app);
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
