import app from "./src/app";
import { config } from "./src/config/config";
const port = config.port || 5501;
const startServer = () => {
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
};
startServer();
