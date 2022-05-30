import { Article } from "../../../entities/Article";
import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import isStringInvalid from "../../../utils/string-invalid";
import {
  badRequest,
  ok,
  serverError,
} from "../../adapters/helpers/http-helpers";
import { IHttpResponse } from "../../adapters/ports/http";
import { IUpdateArticleByIdDTO } from "./updateArticleByIdDTO";

export class updateArticleByIdUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute({
    id: idFind,
    ...data
  }: IUpdateArticleByIdDTO): Promise<IHttpResponse> {
    try {
      if (!idFind) {
        return badRequest(new Error("Id is required"));
      }

      const ArticleIsExist = await this.IArticlesRepository.findArticleById(
        idFind
      );
      if (!ArticleIsExist) {
        return badRequest(new Error("Article not found"));
      }
      if (!(ArticleIsExist instanceof Article)) {
        return badRequest(new Error(ArticleIsExist.message));
      }

      const invalidFields = Object.entries(data)
        .filter(([, value]) => isStringInvalid(value) || !value)
        .map(([key]) => key);

      if (invalidFields.length) {
        return badRequest(
          new Error(`Invalid fields: ${invalidFields.join(" ")}`)
        );
      }
      const { id, ...props } = ArticleIsExist;
      const update = Object.assign(props, data);
      const updatedArticle = await this.IArticlesRepository.findByIdAndUpdate(
        id,
        update
      );
      if (!(updatedArticle instanceof Article)) {
        return badRequest(new Error(updatedArticle.message));
      }
      return ok(updatedArticle);
    } catch (error: any) {
      console.log(error);
      return serverError(error.message);
    }
  }
}
