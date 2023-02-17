import { DataSource } from "typeorm";
import "dotenv/config";
// import path from "path";
import { Adverts } from "./entities/adverts.entity";
import { initial1676643949720 } from "./migrations/1676643949720-initial";

const isProduction = process.env.NODE_ENV === "production";
const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: isProduction
          ? {
              rejectUnauthorized: false,
            }
          : false,
        synchronize: false,
        logging: isProduction ? false : true,
        entities: [Adverts],
        migrations: [initial1676643949720],
      }
);
export default AppDataSource;
