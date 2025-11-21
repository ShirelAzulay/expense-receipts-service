import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReceiptDto {
    @ApiProperty({
        example: 100,
        description: 'Total amount of the receipt as provided by the user.',
    })
    @IsNotEmpty()
    @Type(() => Number) // Ensure string -> number conversion for multipart/form-data
    @IsNumber()
    amount: number;

    @ApiProperty({
        example: '2025-09-25',
        description: 'Date of the event as provided by the user (ISO 8601).',
    })
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @ApiProperty({
        example: 'Team lunch',
        description: 'Business event for which the receipt was issued.',
    })
    @IsNotEmpty()
    @IsString()
    event: string;
}
