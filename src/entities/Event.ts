export class Event {
    public id: string;
    public provider: string;
    constructor(props: Event) {
      Object.assign(this, props);
    }
  }
  