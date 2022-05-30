import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import {
  badRequest,
  created,
  serverError,
} from "../../adapters/helpers/http-helpers";
import { IHttpResponse } from "../../adapters/ports/http";
import { ICreateArticleRequestDTO } from "./createArticleDTO";

export class createArticleUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}
  async execute({
    imageUrl,
    newsSite,
    publishedAt,
    title,
    url,
    ...optional
  }: ICreateArticleRequestDTO): Promise<IHttpResponse> {
    try {
      if (!newsSite || !publishedAt || !title || !url || !imageUrl) {
        return badRequest(new Error("Missing required fields"));
      }
      const article = await this.IArticlesRepository.createArticle({
        imageUrl,
        newsSite,
        publishedAt,
        title,
        url,
        ...optional,
      });
      return created(article);
    } catch (error: any) {
      return serverError(error.message);
    }
  }
}
