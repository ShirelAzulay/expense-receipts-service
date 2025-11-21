import { ReceiptsService } from './receipts.service';

describe('ReceiptsService', () => {
  let service: ReceiptsService;

  beforeEach(() => {
    service = new ReceiptsService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should store a receipt in memory', () => {
    const file: any = { originalname: 'test.pdf' };
    const metadata: any = { amount: 100, date: '2025-09-25', event: 'Test' };

    const created = service.uploadReceipt(file, metadata);

    expect(created.id).toBeDefined();
    expect(service.listReceipts().length).toBe(1);
  });
});
