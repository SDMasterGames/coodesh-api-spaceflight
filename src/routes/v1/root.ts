import { Router } from "express";
import { IControllerProps } from "../../@types/Controller";

export class Controller implements IControllerProps {
  public path = "/";
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(this.path, (req, res) => {
      return res.status(200).send({
        msg: "v1",
      });
    });
  }
}
