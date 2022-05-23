import { Request, Response } from "express";
import { getAllArticlesUseCase } from "./getAllArticlesUseCase";

export class getAllArticlesController {
  constructor(private useCase: getAllArticlesUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const response = await this.useCase.execute();
      return res.status(200).send(response);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while getting all articles",
      });
    }
  }
}
