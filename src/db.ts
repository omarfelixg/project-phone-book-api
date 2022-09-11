import { DataSource } from "typeorm"
import { Blog } from "./entity/Blog"
import dotenv from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host:process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Blog],
    synchronize: true,
    logging: true,
});
