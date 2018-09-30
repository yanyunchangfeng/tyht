import { WangeditorModule } from './wangeditor.module';

describe('WangeditorModule', () => {
  let wangeditorModule: WangeditorModule;

  beforeEach(() => {
    wangeditorModule = new WangeditorModule();
  });

  it('should create an instance', () => {
    expect(wangeditorModule).toBeTruthy();
  });
});
