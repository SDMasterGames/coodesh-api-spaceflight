import { Article } from "../../../entities/Article";
import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import {
  badRequest,
  ok,
  serverError,
} from "../../adapters/helpers/http-helpers";
import { IHttpResponse } from "../../adapters/ports/http";

export class deleteArticleByIdUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute(id?: string): Promise<IHttpResponse> {
    try {
      if (!id) {
        return badRequest(new Error("Id is required"));
      }
      const deletedArticle = await this.IArticlesRepository.deleteById(id);

      if (!deletedArticle) {
        return badRequest(new Error("Article not found"));
      }
      if (!(deletedArticle instanceof Article))
        return badRequest(
          new Error((deletedArticle as ControllerError).message)
        );

      return ok(deletedArticle);
    } catch (error: any) {
      return serverError(error.message);
    }
  }
}
