import path from "path";
import express from "express";
import router from "./routes/contact.routes";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { config } from './configs'

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contacts API",
      version: "1.0.0"
    },
    servers:[
      {
        url: `http://${config().server.url}:${config().server.port}`
        // url: `http://localhost:${PORT}`
        // url: `http://localhost:3000`
      }
    ]
  },
  apis: [`${path.join(__dirname, "./routes/contact.routes.ts")}`],
}

const app = express();

app.use(express.json());
app.use("/api", router);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

export default app;
