import { Request, Response } from "express";
import { createArticleUseCase } from "./createArticleUseCase";

export class createArticleController {
  constructor(private useCase: createArticleUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const response = await this.useCase.execute(req.body);
      return res.status(201).send(response);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while creating article",
      });
    }
  }
}
