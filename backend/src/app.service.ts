import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): string {
    return 'welcome to employee dashboard. Try the /employee routes to get ';
  }
}
