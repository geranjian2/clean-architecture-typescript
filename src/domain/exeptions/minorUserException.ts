export class MinorUserException extends Error {
  constructor () {
    super('User not found')

    Object.setPrototypeOf(this, MinorUserException.prototype)
  }
}
