import { WordcountPipe } from './wordcount.pipe';

describe('WordcountPipe', () => {
  it('create an instance', () => {
    const pipe = new WordcountPipe();
    expect(pipe).toBeTruthy();
  });
});
