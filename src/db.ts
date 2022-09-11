import { DataSource } from "typeorm"
import { ContactEntity } from "./entity/contact.entity"
import { config } from './configs'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: config().db.host,
    port: parseInt(config().db.port, 10),
    username: config().db.username.toString(),
    password: config().db.password.toString(),
    database: config().db.database.toString(),
    entities: [ContactEntity],
    synchronize: true,
});
