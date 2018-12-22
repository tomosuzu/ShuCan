import Shucan, { ShucanState, addShucan } from './Shucan';

describe('Shucan', () => {
  it('add Shucan\'s title', () => {
    const state: ShucanState = { title: '' };
    const result = Shucan(state, addShucan('title'));
    expect(result.title).toBe('title');
  });
});
