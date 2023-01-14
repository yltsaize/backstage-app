import { s3Plugin } from './plugin';

describe('s3', () => {
  it('should export plugin', () => {
    expect(s3Plugin).toBeDefined();
  });
});
