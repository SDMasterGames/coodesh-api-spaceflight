import { Application, Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.status(200).send({
    msg: "articles",
  });
});

export default (app: Application) => app.use("/articles", route);
