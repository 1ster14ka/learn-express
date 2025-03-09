import { mongoDB } from "./db/initMongoDB.js";
import { startServer } from "./server.js";

const bootstrap = async () => {
  await mongoDB();
  startServer();
};

bootstrap();
