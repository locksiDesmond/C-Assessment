import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { EmployeeEntity } from './employee.entity/employee.entity';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private service: EmployeesService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getEmployee(params.id);
  }

  @Get()
  async findAll(): Promise<EmployeeEntity[]> {
    return await this.service.getEmployees();
  }

  @Post()
  create(@Body() employee: EmployeeEntity) {
    return this.service.createEmployee(employee);
  }

  @Put()
  update(@Body() employee: EmployeeEntity) {
    return this.service.updateEmployee(employee);
  }

  @Delete(':id')
  deleteEmployee(@Param() params) {
    return this.service.deleteEmployee(params.id);
  }
}
