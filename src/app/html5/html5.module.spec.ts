import { Html5Module } from './html5.module';

describe('Html5Module', () => {
  let html5Module: Html5Module;

  beforeEach(() => {
    html5Module = new Html5Module();
  });

  it('should create an instance', () => {
    expect(html5Module).toBeTruthy();
  });
});
