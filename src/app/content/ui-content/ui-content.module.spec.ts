import { UIContentModule } from './ui-content.module';

describe('ContectModule', () => {
  let contectModule: UIContentModule;

  beforeEach(() => {
    contectModule = new UIContentModule();
  });

  it('should create an instance', () => {
    expect(contectModule).toBeTruthy();
  });
});
