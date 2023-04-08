import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();
import {studentsRoute} from "./routes/studentsRoute";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/v1', studentsRoute);

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT || PORT, () => console.log(`Server: http://localhost:${PORT}`));