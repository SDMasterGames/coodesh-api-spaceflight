export interface IHttpResponse {
  code: number;
  body: any;
}

export interface IHttpRequest {
  body?: any;
  query?: any;
  params?: any;
}
