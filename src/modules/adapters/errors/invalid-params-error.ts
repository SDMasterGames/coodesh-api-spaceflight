export class InvalidParamsError extends Error implements ControllerError {
  constructor(message: string) {
    super(`Invalid params: ${message}`);
    this.name = "InvalidParamsError";
  }
}
