import dotenv from "dotenv";
import express from "express";
import pino from "pino-http";
import cors from "cors";
import { getEnvVar } from "./utils/getEnvVar.js";
import studentsRouter from "./routers/students.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const PORT = Number(getEnvVar("PORT", "3000"));

export const startServer = () => {
  const app = express();

  app.use(
    express.json({
      type: ["application/json", "application/vnd+api.json"],
      limit: "100kb",
    })
  );
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.get("/", (req, res) => {
    res.json({
      message: "Hello world",
    });
  });

  app.use(studentsRouter);

  app.use("*", notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
  });
};
