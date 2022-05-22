import { Application, Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.status(200).send({
    msg: "Back-end Challenge 2021 🏅 - Space Flight News",
  });
});

export default (app: Application) => app.use("/", route);
