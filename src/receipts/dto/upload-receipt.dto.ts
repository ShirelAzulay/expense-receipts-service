import { ApiProperty } from '@nestjs/swagger';
import { CreateReceiptDto } from './create-receipt.dto';

export class UploadReceiptDto extends CreateReceiptDto {
    @ApiProperty({
        type: 'string',
        format: 'binary',
        description: 'Uploaded receipt file (PDF / JPG / PNG).',
    })
    file: any; // Handled by Multer interceptor
}
