import { Article } from "../../../entities/Article";
import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import { MissingParamsError } from "../../adapters/errors/";
import {
  badRequest,
  ok,
  serverError,
} from "../../adapters/helpers/http-helpers";
import { IHttpResponse } from "../../adapters/ports/http";

export class getArticleByIdUseCase {
  constructor(private IArticleRepository: IArticlesRepository) {}

  async execute(id?: string): Promise<IHttpResponse> {
    try {
      if (!id) {
        return badRequest(new MissingParamsError("id"));
      }
      const ArticleIsExist = await this.IArticleRepository.findArticleById(id);
      if (!ArticleIsExist) {
        return badRequest(new Error("Article is not exist"));
      }

      if (!(ArticleIsExist instanceof Article))
        return badRequest(new Error(ArticleIsExist.message));
      return ok(ArticleIsExist);
    } catch (error: any) {
      return serverError(error.message);
    }
  }
}
