import { BulkImportModule } from './bulk-import.module';

describe('BulkImportModule', () => {
  let bulkImportModule: BulkImportModule;

  beforeEach(() => {
    bulkImportModule = new BulkImportModule();
  });

  it('should create an instance', () => {
    expect(bulkImportModule).toBeTruthy();
  });
});
