import { ApiProperty } from '@nestjs/swagger';

export class ReceiptSummaryDto {
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
        example: 100,
        description: 'Total amount provided in the metadata.',
    })
    amount: number;

    @ApiProperty({
        example: '2025-09-25',
        description: 'Event date provided in the metadata.',
    })
    date: string;

    @ApiProperty({
        example: 'Team lunch',
        description: 'Event description provided in the metadata.',
    })
    event: string;
}
