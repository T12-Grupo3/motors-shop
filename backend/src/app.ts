import "express-async-errors";
import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import cors from "cors";
import advertsRoutes from "./routes/adverts.routes";
// import imageAdvertsRoutes from "./routes/image_adverts.routes"
import swaggerDocument from "../swagger.json";
import usersRoutes from "./routes/users.routes";
import commentsRoutes from "./routes/comments.routes";
import loginRoutes from "./routes/login.routes";
import handleAppErrorMiddleware from "./middleware/handleAppError";
import passwordRoute from "./routes/passwordChange.routes";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/comments", commentsRoutes);
app.use("/adverts", advertsRoutes);
app.use("/pass", passwordRoute)
// app.use("/imageadverts", imageAdvertsRoutes);
app.use(handleAppErrorMiddleware);

export default app;
