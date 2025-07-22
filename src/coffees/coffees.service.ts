import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from 'src/entities/coffee.entity';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dtos/create-coffee.dto';
import { UpdateCoffeeDto } from './dtos/update-coffee.dto';

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
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.save(coffee);
  }
}
