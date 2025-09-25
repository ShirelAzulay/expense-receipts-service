import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReceiptDto {
    @ApiProperty({ example: 100, description: 'Total amount of the receipt' })
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @ApiProperty({ example: '2025-09-25', description: 'Date of the event' })
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @ApiProperty({ example: 'Team lunch', description: 'Event for which the receipt was issued' })
    @IsNotEmpty()
    @IsString()
    event: string;
}
