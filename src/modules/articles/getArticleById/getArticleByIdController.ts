import { Request, Response } from "express";
import { getArticleByIdUseCase } from "./getArticleByIdUseCase";

export class getArticleByIdController {
  constructor(private useCase: getArticleByIdUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const response = await this.useCase.execute(req.params.id);
      return res.status(200).send(response);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error finding an article",
      });
    }
  }
}
