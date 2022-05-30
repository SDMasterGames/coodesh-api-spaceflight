import { Request, Response } from "express";
import { IHttpRequest, IHttpResponse } from "../../adapters/ports/http";
import { getArticleByIdUseCase } from "./getArticleByIdUseCase";

export class getArticleByIdController {
  constructor(private useCase: getArticleByIdUseCase) {}

  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const { id } = req.params;
    const { body, code } = await this.useCase.execute(id);
    return { body, code };
  }
}
