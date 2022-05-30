import { IHttpRequest, IHttpResponse } from "../../adapters/ports/http";
import { createArticleUseCase } from "./createArticleUseCase";

export class createArticleController {
  constructor(private useCase: createArticleUseCase) {}
  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const { body, code } = await this.useCase.execute(req.body);
    return { body, code };
  }
}
