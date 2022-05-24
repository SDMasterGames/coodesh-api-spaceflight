import { Router } from "express";
export class Controller implements Controller.IControllerProps<Router> {
  public path = "/";
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    /*
     *Retornar um Status: 200 e uma mensagem
     */
    this.router.get(this.path, (req, res) => {
      return res.status(200).send({
        msg: "Back-end Challenge 2021 🏅 - Space Flight News",
      });
    });
  }
}
