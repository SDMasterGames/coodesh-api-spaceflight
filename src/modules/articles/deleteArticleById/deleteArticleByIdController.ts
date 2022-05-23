import { Request, Response } from "express";
import { deleteArticleByIdUseCase } from "./deleteArticleByIdUseCase";

export class deleteArticleByIdController {
  constructor(private useCase: deleteArticleByIdUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedArticle = await this.useCase.execute(id);
      return res.status(200).send(deletedArticle);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while deleting article",
      });
    }
  }
}
