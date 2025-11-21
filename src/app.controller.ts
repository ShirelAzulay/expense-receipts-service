import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Health check',
    description:
        'Simple health endpoint to verify that the Receipts Validation API is running.',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
