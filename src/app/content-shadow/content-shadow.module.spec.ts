import { ContentShadowModule } from './content-shadow.module';

describe('ContentShadowModule', () => {
  let contentShadowModule: ContentShadowModule;

  beforeEach(() => {
    contentShadowModule = new ContentShadowModule();
  });

  it('should create an instance', () => {
    expect(contentShadowModule).toBeTruthy();
  });
});
