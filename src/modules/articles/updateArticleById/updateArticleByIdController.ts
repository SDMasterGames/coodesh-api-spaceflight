import { Request, Response } from "express";
import { updateArticleByIdUseCase } from "./updateArticleByIdUseCase";

export class updateArticleByIdController {
  constructor(private useCase: updateArticleByIdUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const response = await this.useCase.execute({ id, title });
      return res.status(200).send(response);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while updating article",
      });
    }
  }
}
