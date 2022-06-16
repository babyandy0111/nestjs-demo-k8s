import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}
  create(createCatInput: CreateCatInput) {
    return this.catsRepository.save(createCatInput);
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    return await this.catsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCatInput: UpdateCatInput) {
    return await this.catsRepository.update(id, updateCatInput);
  }

  async remove(id: number) {
    return await this.catsRepository.delete(id);
  }
}
