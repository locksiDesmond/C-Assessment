import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EmployeeEntity } from './employee.entity/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeesRepository: Repository<EmployeeEntity>,
  ) {}

  async getEmployees(): Promise<EmployeeEntity[]> {
    return await this.employeesRepository.find();
  }
  async getEmployee(_id: number): Promise<EmployeeEntity> {
    return await this.employeesRepository.findOne({
      select: ['id', 'dateJoined', 'email', 'position', 'fullName'],
      where: [{ id: _id }],
    });
  }

  async createEmployee(employee: EmployeeEntity) {
    this.employeesRepository.insert(employee);
  }

  async updateEmployee(employee: EmployeeEntity) {
    this.employeesRepository.save(employee);
  }

  async deleteEmployee(employee: EmployeeEntity) {
    this.employeesRepository.delete(employee);
  }
}
