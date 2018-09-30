import { CabientModule } from './cabient.module';

describe('CabientModule', () => {
  let cabientModule: CabientModule;

  beforeEach(() => {
    cabientModule = new CabientModule();
  });

  it('should create an instance', () => {
    expect(cabientModule).toBeTruthy();
  });
});
