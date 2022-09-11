import app  from "./app";
import { AppDataSource } from "./db";
import { config } from './configs'

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Connected to Postgres')
    app.listen (config().server.port);
    console.log("Running on port: ", config().server.port)
  }
  catch (error) {
    console.error(error)
        throw new Error("Unable to connect to db")
  }
}
main();
