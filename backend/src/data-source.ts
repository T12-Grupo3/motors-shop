import { DataSource } from "typeorm";
import "dotenv/config";
// import path from "path";
import { Adverts } from "./entities/adverts.entity";
import{ initial1676483267066 } from "./migrations/1676483267066-initial"

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
        migrations: [initial1676483267066],
      }
);
export default AppDataSource;
