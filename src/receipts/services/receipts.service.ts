import { Injectable, NotFoundException } from '@nestjs/common';
import type { Express } from 'express';
import { CreateReceiptDto } from '../dto/create-receipt.dto';
import { ReceiptSummaryDto } from '../dto/receipt-summary.dto';
import { ReceiptDetailsDto } from '../dto/receipt-details.dto';
import { ValidationResultDto } from '../dto/validation-result.dto';

interface ReceiptRecord {
    /**
     * Internal representation of a receipt stored in memory.
     * This structure is used only for milestone 1.
     */
    id: string;
    originalFileName: string;
    metadata: CreateReceiptDto;
}

@Injectable()
export class ReceiptsService {
    /**
     * In-memory storage for receipts.
     * This will be replaced by a persistent store in later milestones.
     */
    private receipts: ReceiptRecord[] = [];

    /**
     * Simple incremental ID generator for in-memory records.
     */
    private nextId = 1;

    /**
     * Store receipt metadata and basic file information in memory.
     * No physical file persistence is performed in this milestone.
     */
    uploadReceipt(
        file: Express.Multer.File,
        metadata: CreateReceiptDto,
    ): ReceiptDetailsDto {
        const id = String(this.nextId++);

        const record: ReceiptRecord = {
            id,
            originalFileName: file?.originalname ?? 'unknown',
            metadata,
        };

        this.receipts.push(record);

        return {
            id: record.id,
            originalFileName: record.originalFileName,
            metadata: record.metadata,
        };
    }

    /**
     * Return a summary list of all stored receipts.
     * Used for listing and demo purposes.
     */
    listReceipts(): ReceiptSummaryDto[] {
        return this.receipts.map((record) => ({
            id: record.id,
            originalFileName: record.originalFileName,
            amount: record.metadata.amount,
            date: record.metadata.date,
            event: record.metadata.event,
        }));
    }

    /**
     * Return a single receipt by its ID.
     * Throws NotFoundException when the ID does not exist.
     */
    getReceipt(id: string): ReceiptDetailsDto {
        const record = this.receipts.find((r) => r.id === id);

        if (!record) {
            throw new NotFoundException(`Receipt with id ${id} not found`);
        }

        return {
            id: record.id,
            originalFileName: record.originalFileName,
            metadata: record.metadata,
        };
    }

    /**
     * Validation mock without receipt ID.
     * For milestone 1 this always returns "not_implemented".
     */
    validateMetadataOnly(metadata: CreateReceiptDto): ValidationResultDto {
        return {
            status: 'not_implemented',
            message:
                'Validation logic is not implemented yet. OCR and business rules will be added in the next milestones.',
        };
    }

    /**
     * Validation mock with receipt ID.
     * Verifies that the receipt exists and then returns a "not_implemented" status.
     * If the receipt does not exist, a NotFoundException is thrown.
     */
    validateReceiptById(
        id: string,
        metadata: CreateReceiptDto,
    ): ValidationResultDto {
        const record = this.receipts.find((r) => r.id === id);

        if (!record) {
            throw new NotFoundException(`Receipt with id ${id} not found`);
        }

        return {
            status: 'not_implemented',
            message:
                'Validation logic is not implemented yet. OCR and business rules will be added in the next milestones.',
            receiptId: id,
        };
    }
}
