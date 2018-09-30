import { GraphVisualModule } from './graph-visual.module';

describe('GraphVisualModule', () => {
  let graphVisualModule: GraphVisualModule;

  beforeEach(() => {
    graphVisualModule = new GraphVisualModule();
  });

  it('should create an instance', () => {
    expect(graphVisualModule).toBeTruthy();
  });
});
