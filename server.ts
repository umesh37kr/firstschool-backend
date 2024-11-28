import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";
const port = config.port || 5501;
const startServer = async () => {
  // connect database
  await connectDB();

  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
};
startServer();
