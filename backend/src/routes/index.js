const authRouter = require("./auth");

const setUpRoutes = (app) => {
  app.use("/auth", authRouter);
};

module.exports = {
  setUpRoutes,
};
