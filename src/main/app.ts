import cors from "cors";
import morgan from "morgan";
import { swaggerSpec } from "./swagger";
import router from "../infra/http/routes";
import swaggerUi from "swagger-ui-express";
import express, { Application } from "express";

const app: Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", router);

export { app };
