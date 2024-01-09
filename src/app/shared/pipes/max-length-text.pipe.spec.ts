import { MaxLengthTextPipe } from './max-length-text.pipe';

describe('MaxLengthTextPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxLengthTextPipe();
    expect(pipe).toBeTruthy();
  });
});
