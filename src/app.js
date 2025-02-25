import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mockingRouter from "./routes/mocks.router.js";

const app = express();
const PORT = config.port;
const connection = mongoose.connect(config.mongoUrl, { dbName: config.bdname });
const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Documentación Entrega Final Backend III",
      description: "Documentación Swagger api",
    },
  },
  apis: ["./src/docs/**/*.yaml"],
};
const specs = swaggerJSDoc(swaggerOptions);
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:8080",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
 }));

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mockingRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
