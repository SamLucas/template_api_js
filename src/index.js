import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./Routes";

require("dotenv").config();
require("@/config/database");

const app = express();

app.use(express.json());
app.use(morgan(process.env.MORGAN_CONFIG));
app.use(cors());
app.use(process.env.PREFIX, routes);

app.listen(3000);
