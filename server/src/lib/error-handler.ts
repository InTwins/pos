export class ErrorHandler extends Error {
  constructor(
    message: string,
    public statusCode: number,
    error: any = null,
  ) {
    console.error(error)
    super(message)
    Error.captureStackTrace(this, this.constructor)
  }
}
