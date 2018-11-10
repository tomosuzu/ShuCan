import Shucan from './Shucan';

describe('index', () => {
  test('input routine', () => {
    const shucan = new Shucan('Title');

    expect(shucan.title).toBe('Title');
  });
});
