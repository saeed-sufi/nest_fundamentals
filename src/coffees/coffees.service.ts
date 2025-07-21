import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from 'src/entities/coffee.entity';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dtos/create-coffee.dto';

@Injectable()
export class CoffeesService {
  // private coffeeRepository: Coffee[] = [
  //   {
  //     id: 1,
  //     name: 'esperso',
  //     brand: 'americano',
  //     flavors: ['sour', 'sweet'],
  //   },
  // ];
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });
    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found.`);
    }
    return coffee;
  }

  async createOne(createCoffeeDto: CreateCoffeeDto) {
    const coffee = await this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
    // this.coffeeRepository.push(createCoffeeDto);
  }

  async remove(id: number) {
    const coffeeIndex = await this.coffeeRepository.findOne({ where: { id } });
    if (coffeeIndex) {
      // this.coffeeRepository.splice(coffeeIndex, 1);
    }
  }

  update(id: string, updateCoffeeDto: any) {
    return updateCoffeeDto;
    // const exists = this.findOne(id);
    // if (exists) {
    // do sth
    // }
  }
}
