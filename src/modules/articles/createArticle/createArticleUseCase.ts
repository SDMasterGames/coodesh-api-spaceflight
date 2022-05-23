import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
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
  }: ICreateArticleRequestDTO) {
    if (!newsSite || !publishedAt || !title || !url || !imageUrl) {
      throw new Error("Missing required fields");
    }
    const article = await this.IArticlesRepository.createArticle({
      imageUrl,
      newsSite,
      publishedAt,
      title,
      url,
      ...optional,
    });
    return article;
  }
}
