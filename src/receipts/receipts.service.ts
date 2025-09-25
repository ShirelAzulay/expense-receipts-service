import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';

@Injectable()
export class ReceiptsService {
    private receipts: any[] = [];

    uploadReceipt(file: Express.Multer.File, metadata: CreateReceiptDto) {
        const id = this.receipts.length + 1;
        const data = {
            id,
            file: file?.originalname,
            metadata,
        };
        this.receipts.push(data);
        return { message: 'Receipt uploaded', ...data };
    }

    listReceipts() {
        return this.receipts;
    }

    getReceipt(id: string) {
        return this.receipts.find(r => r.id === Number(id)) || { error: 'Not found' };
    }

    validateReceipt(id: string, metadata: CreateReceiptDto) {
        const receipt = this.getReceipt(id);
        if ('error' in receipt) {
            return { id, valid: false, reason: 'Receipt not found' };
        }
        // בהמשך אפשר להשוות metadata מול מה שחולץ מהקובץ
        return { id, valid: true, providedMetadata: metadata };
    }
}
