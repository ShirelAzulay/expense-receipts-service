import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Express } from 'express';
import { ReceiptsService } from '../services/receipts.service';
import { CreateReceiptDto } from '../dto/create-receipt.dto';
import { ReceiptSummaryDto } from '../dto/receipt-summary.dto';
import { ReceiptDetailsDto } from '../dto/receipt-details.dto';
import { ValidationResultDto } from '../dto/validation-result.dto';
import { UploadReceiptDto } from '../dto/upload-receipt.dto';
import {
    ApiBody,
    ApiConsumes,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('receipts')
@Controller('receipts')
export class ReceiptsController {
    constructor(private readonly receiptsService: ReceiptsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    @ApiOperation({
        summary: 'Upload a receipt with metadata (mock implementation).',
        description:
            'Accepts a file and metadata. For milestone 1, only stores data in memory and does not perform OCR or validation.',
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Receipt upload payload',
        type: UploadReceiptDto,
    })
    @ApiResponse({
        status: 201,
        description: 'Receipt stored in memory (mock).',
        type: ReceiptDetailsDto,
    })
    uploadReceipt(
        @UploadedFile() file: Express.Multer.File,
        @Body() metadata: CreateReceiptDto,
    ): ReceiptDetailsDto {
        return this.receiptsService.uploadReceipt(file, metadata);
    }

    @Get()
    @ApiOperation({
        summary: 'List all receipts (mock).',
        description:
            'Returns a summary list of all uploaded receipts stored in memory.',
    })
    @ApiResponse({
        status: 200,
        type: ReceiptSummaryDto,
        isArray: true,
    })
    listReceipts(): ReceiptSummaryDto[] {
        return this.receiptsService.listReceipts();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Get a single receipt by id (mock).',
        description:
            'Returns details of a single receipt stored in memory. Throws 404 if not found.',
    })
    @ApiResponse({
        status: 200,
        type: ReceiptDetailsDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Receipt not found.',
    })
    getReceipt(@Param('id') id: string): ReceiptDetailsDto {
        return this.receiptsService.getReceipt(id);
    }

    @Post('validate')
    @ApiOperation({
        summary: 'Validate metadata only (no id, mock).',
        description:
            'For milestone 1, this endpoint always returns "not_implemented". In later milestones, it will validate metadata against extracted data.',
    })
    @ApiBody({
        type: CreateReceiptDto,
    })
    @ApiResponse({
        status: 200,
        type: ValidationResultDto,
    })
    validateMetadataOnly(
        @Body() metadata: CreateReceiptDto,
    ): ValidationResultDto {
        return this.receiptsService.validateMetadataOnly(metadata);
    }

    @Post(':id/validate')
    @ApiOperation({
        summary: 'Validate a specific receipt by id (mock).',
        description:
            'For milestone 1, this endpoint checks that the receipt exists, but still returns "not_implemented".',
    })
    @ApiBody({
        type: CreateReceiptDto,
    })
    @ApiResponse({
        status: 200,
        type: ValidationResultDto,
    })
    @ApiResponse({
        status: 404,
        description: 'Receipt not found.',
    })
    validateReceiptById(
        @Param('id') id: string,
        @Body() metadata: CreateReceiptDto,
    ): ValidationResultDto {
        return this.receiptsService.validateReceiptById(id, metadata);
    }
}
