import app from "./src/app";
const port = process.env.PORT || 5501;
const startServer = () => {
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
};
startServer();
