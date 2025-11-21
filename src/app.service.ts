import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Basic health message. Can be extended later to include build info, version, etc.
   */
  getHello(): string {
    return 'Receipts Validation API is running (Milestone 1: Mock endpoints, no OCR, no rules).';
  }
}
