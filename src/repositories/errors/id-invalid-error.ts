export class IdInvalidError extends Error implements ControllerError {
  constructor() {
    super(`Invalid id`);
    this.name = "IdInvalidError";
  }
}
