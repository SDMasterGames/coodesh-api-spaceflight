export class UnexpectedError extends Error implements ControllerError {
  constructor(message: string) {
    super(`Unexpected error ${message}`);
    this.name = "UnexpectedError";
  }
}
