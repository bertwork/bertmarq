import express from "express";
import morgan from "morgan";
import { toNodeHandler } from "better-auth/node";

import { auth } from "./lib/auth";

const app = express();
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());

app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello World From EXPRESS SERVER!!" });
});

export default app;
