import { Module } from '@nestjs/common';
import { ReceiptsController } from './controllers/receipts.controller';
import { ReceiptsService } from './services/receipts.service';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService],
})
export class ReceiptsModule {}
