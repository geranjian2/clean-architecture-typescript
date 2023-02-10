export class User {
  readonly id: string
  name: string
  age: number
  username: string

  constructor ({ id, name, age, username }: { id: string, name: string, age: number, username: string }) {
    this.id = id
    this.name = name
    this.age = age
    this.username = username
    console.log(this.name)
  }
}
