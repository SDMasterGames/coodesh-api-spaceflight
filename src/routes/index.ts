import { Router } from "express";
import fs from "fs";
import path from "path";
import { IControllerProps } from "../@types/Controller";

export class Controller implements IControllerProps {
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

    this.getRoutesAllFiles();
  }

  getRoutesAllFiles() {
    fs.readdirSync(__dirname)
      .filter((files) => !files.startsWith("index"))
      .forEach((folder) => {
        fs.readdirSync(path.join(__dirname, folder)).forEach((file) => {
          const { Controller } = require(path.join(__dirname, folder, file));

          const route = new Controller();

          const fullPath = `${this.path}${folder}`;

          this.router.use(fullPath, route.router);
        });
      });
  }
}
