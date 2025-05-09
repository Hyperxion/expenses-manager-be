import { Injectable } from '@nestjs/common';
import { CreateTransactionCategoryDto } from './dto/create-transaction-category.dto';
import { LoggerService } from '../logger/logger.service';
import { TransactionCategoriesRepository } from './transaction-categories.repository';
import { UpdateTransactionCategoryDto } from './dto/update-transaction-category.dto';
import { FindManyOptions } from 'typeorm';
import { TransactionCategory } from './entities/transaction-category.entity';

@Injectable()
export class TransactionCategoriesService {
  constructor(
    private loggerService: LoggerService,
    private transactionCategoriesRepository: TransactionCategoriesRepository,
  ) {}

  async create(createTransactionCategoryDto: CreateTransactionCategoryDto) {
    return this.transactionCategoriesRepository.createCategory(
      createTransactionCategoryDto,
    );
  }

  async findAll(options?: FindManyOptions<TransactionCategory>) {
    return await this.transactionCategoriesRepository.findAllGeneric();
  }

  async findOne(id: string) {
    return await this.transactionCategoriesRepository.findGeneric({ id });
  }

  async update(
    id: string,
    updateTransactionCategoryDto: UpdateTransactionCategoryDto,
  ) {
    return await this.transactionCategoriesRepository.updateGeneric(
      id,
      updateTransactionCategoryDto,
    );
  }

  async bulkCreate(categories: TransactionCategory[]) {
    return await this.transactionCategoriesRepository.bulkCreate(categories);
  }

  async remove(id: string) {
    return await this.transactionCategoriesRepository.removeGeneric(id);
  }

  async deleteAll() {
    return await this.transactionCategoriesRepository.deleteAll();
  }
}
