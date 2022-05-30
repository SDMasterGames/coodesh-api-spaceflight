import { IHttpRequest, IHttpResponse } from "../../adapters/ports/http";
import { getAllArticlesUseCase } from "./getAllArticlesUseCase";

export class getAllArticlesController {
  constructor(private useCase: getAllArticlesUseCase) {}
  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const { body, code } = await this.useCase.execute(req.query);
    return { body, code };
  }
}
