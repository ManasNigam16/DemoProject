import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return `Added new Cat`;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
