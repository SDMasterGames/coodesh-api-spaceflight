export class NotFoundError extends Error implements ControllerError {
    constructor() {
      super(`Not found`);
      this.name = "NotFoundError";
    }
  }
  