import { mongoDB } from "./db/initMongoDB.js";
import { startServer } from "./server.js";

const bootstrap = async () => {
  await mongoDB();
  startServer();
};

bootstrap();
// const app = express();

// const PORT = 3000;

// app.use(
//   pino({
//     transport: {
//       target: "pino-pretty",
//     },
//   })
// );

// app.use(cors());

// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send();
// // });

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello",
//     Time: new Date().toLocaleString(),
//   });
// });

// app.use("*", (req, res, next) => {
//   res.status(404).json({
//     message: "Route not found",
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: "Something went wrong",
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log("Server is working ");
// });

// console.log("Hello");
