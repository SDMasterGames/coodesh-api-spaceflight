import { IHttpRequest, IHttpResponse } from "../../adapters/ports/http";
import { deleteArticleByIdUseCase } from "./deleteArticleByIdUseCase";

export class deleteArticleByIdController {
  constructor(private useCase: deleteArticleByIdUseCase) {}

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const { id } = req.params;
    const { body, code } = await this.useCase.execute(id);
    return { body, code };
  }
}
