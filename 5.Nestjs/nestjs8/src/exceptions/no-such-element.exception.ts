export class NoSuchElementException extends Error {
    constructor(message: string, public readonly code: string) {
      super(message);
    }
  }