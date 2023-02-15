import "reflect-metadata"
import express from "express"
import "express-async-errors"
// import swaggerUi from "swagger-ui-express"
// import swaggerDocs from "./swagger.json"
import cors from "cors"
import advertsRoutes from "./routes/adverts.routes"





const app = express()

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.use(express.json());

app.use("/adverts", advertsRoutes);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default app
