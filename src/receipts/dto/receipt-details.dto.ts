import { ApiProperty } from '@nestjs/swagger';
import { CreateReceiptDto } from './create-receipt.dto';

export class ReceiptDetailsDto {
    @ApiProperty({
        example: '1',
        description: 'Internal identifier of the receipt.',
    })
    id: string;

    @ApiProperty({
        example: 'receipt_123.pdf',
        description: 'Original file name of the uploaded receipt.',
    })
    originalFileName: string;

    @ApiProperty({
        type: CreateReceiptDto,
        description: 'Metadata provided by the user when uploading the receipt.',
    })
    metadata: CreateReceiptDto;
}
