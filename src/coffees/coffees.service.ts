import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'src/entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'esperso',
      brand: 'americano',
      flavors: ['sour', 'sweet'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((c) => c.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found.`);
    }
    return coffee;
  }

  createOne(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((c) => c.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }

  update(id: string, updateCoffeeDto: any) {
    return updateCoffeeDto;
    const exists = this.findOne(id);
    if (exists) {
      // do sth
    }
  }
}
