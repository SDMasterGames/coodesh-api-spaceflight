import { IArticlesRepository } from "../../../repositories/IArticlesRepository";
import { InvalidParamsError } from "../../adapters/errors/invalid-params-error";
import {
  badRequest,
  ok,
  serverError,
} from "../../adapters/helpers/http-helpers";
import { IHttpResponse } from "../../adapters/ports/http";
import { IGetAllArticlesDTO } from "./getAllArticlesDTO";

export class getAllArticlesUseCase {
  constructor(private IArticlesRepository: IArticlesRepository) {}

  async execute({ limit, page }: IGetAllArticlesDTO): Promise<IHttpResponse> {
    try {
      const numberLimit = Number(limit || 10);
      const numberPage = Number(page || 1);
      if (!Number.isInteger(numberLimit) || !Number.isInteger(numberPage)) {
        return badRequest(
          new InvalidParamsError("limit and page must be integer")
        );
      }

      const allArticles = await this.IArticlesRepository.getAllArticles({
        limit: numberLimit,
        page: numberPage,
      });
      return ok(allArticles);
    } catch (error: any) {
      return serverError(error.message);
    }
  }
}
