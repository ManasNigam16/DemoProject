import { Injectable } from '@nestjs/common';
const age = 23;
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello!';
  }

  getName(): string {
    return 'My name is Manas Nigam.';
  }

  getAge(): string {
    return `My age is ${age}`;
  }
}
