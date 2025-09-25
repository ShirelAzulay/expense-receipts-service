import { Controller, Get, Post, Param, Body, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReceiptsService } from './receipts.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';

@Controller('receipts')
export class ReceiptsController {
    constructor(private readonly receiptsService: ReceiptsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    @UsePipes(new ValidationPipe({ transform: true }))
    uploadReceipt(@UploadedFile() file: Express.Multer.File, @Body() metadata: CreateReceiptDto) {
        return this.receiptsService.uploadReceipt(file, metadata);
    }

    @Get()
    listReceipts() {
        return this.receiptsService.listReceipts();
    }

    @Get(':id')
    getReceipt(@Param('id') id: string) {
        return this.receiptsService.getReceipt(id);
    }

    @Post(':id/validate')
    validateReceipt(@Param('id') id: string, @Body() metadata: CreateReceiptDto) {
        return this.receiptsService.validateReceipt(id, metadata);
    }
}
