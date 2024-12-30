import express from "express";
import path from "path";

require("dotenv").config({
  path: path.resolve(
    __dirname.replace(process.env.NODE_ENV === "dev" ? "/src" : "/build", ""),
    `.env.${process.env.NODE_ENV}`
  ),
});

const app = express();
app.use(express.json());

const HOST: string = process.env.API_HOST || "127.0.0.1";
const PORT: number = process.env.API_PORT
  ? parseInt(process.env.API_PORT)
  : 3000;

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
