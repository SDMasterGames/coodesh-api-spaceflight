import { Request, Response } from "express";
import { IHttpRequest, IHttpResponse } from "../../adapters/ports/http";
import { updateArticleByIdUseCase } from "./updateArticleByIdUseCase";

export class updateArticleByIdController {
  constructor(private useCase: updateArticleByIdUseCase) {}
  async handle(req: IHttpRequest): Promise<IHttpResponse> {
    const { id } = req.params;
    const data = req.body;
    const { body, code } = await this.useCase.execute({ id, ...data });
    return { body, code };
  }
}
