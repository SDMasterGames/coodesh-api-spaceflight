import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import { IGetAllArticlesDTO } from "./getAllArticlesDTO";

export class getAllArticlesUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute({ limit, page }: IGetAllArticlesDTO) {
    const numberLimit = Number(limit || 10);
    const numberPage = Number(page || 1);
    if (!Number.isInteger(numberLimit) || !Number.isInteger(numberPage)) {
      throw new Error("Invalid limit or page");
    }

    const allArticles = await this.IArticlesRepository.getAllArticles({
      limit: numberLimit,
      page: numberPage,
    });
    return allArticles || [];
  }
}
