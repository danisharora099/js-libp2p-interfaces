
/**
 * When this error is thrown it means an operation was aborted,
 * usually in response to the `abort` event being emitted by an
 * AbortSignal.
 */
export class AbortError extends Error {
  public readonly code: string
  public readonly type: string

  constructor (message: string = 'The operation was aborted') {
    super(message)
    this.code = AbortError.code
    this.type = AbortError.type
  }

  static get code () {
    return 'ABORT_ERR'
  }

  static get type () {
    return 'aborted'
  }
}
