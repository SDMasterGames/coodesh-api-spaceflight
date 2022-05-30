import { ServerError } from "../errors/server-error";
import { IHttpResponse } from "../ports/http";

export const badRequest = (error: Error): IHttpResponse => ({
  code: 400,
  body: error.message,
});

export const created = (body: any): IHttpResponse => ({
  code: 201,
  body,
});

export const ok = (body: any): IHttpResponse => ({
  body,
  code: 200,
});

export const serverError = (error: string): IHttpResponse => ({
  code: 500,
  body: new ServerError(error || ""),
});
