import { ApiProperty } from '@nestjs/swagger';

export class ValidationResultDto {
    @ApiProperty({
        example: 'not_implemented',
        description: 'Current status of the validation logic.',
    })
    status: string;

    @ApiProperty({
        example:
            'Validation logic is not implemented yet. OCR and business rules will be added in the next milestones.',
        description: 'Human-readable explanation of the status.',
    })
    message: string;

    @ApiProperty({
        example: '1',
        required: false,
        description:
            'Optional receipt identifier that was requested for validation.',
    })
    receiptId?: string;
}
