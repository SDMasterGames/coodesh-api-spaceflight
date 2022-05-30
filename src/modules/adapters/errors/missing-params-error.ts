export class MissingParamsError extends Error implements ControllerError {
  constructor(message: string) {
    super(`Missing params: ${message}`);
    this.name = "MissingParamsError";
  }
}
