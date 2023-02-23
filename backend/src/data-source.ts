import { DataSource } from "typeorm";
import "dotenv/config";
// import path from "path";
import { Adverts } from "./entities/adverts.entity";
import { ImageAdverts } from "./entities/image_adverts.entity";
import { ajustenorelacionamento1676723800179 } from "./migrations/1676723800179-ajustenorelacionamento";



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
        entities: [Adverts, ImageAdverts],
        migrations: [ajustenorelacionamento1676723800179],
      }
);
export default AppDataSource;
