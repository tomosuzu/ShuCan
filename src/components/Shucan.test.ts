import Shucan, { ShucanState, addShucan } from './Shucan';

describe('Shucan', () => {
  it('add Shucan\'s title', () => {
    const state: ShucanState = { shucan: [] };
    Shucan(state, addShucan('title1', 'day'));
    const result = Shucan(state, addShucan('title2', 'week'));

    expect(result.shucan[0].title).toBe('title1');
    expect(result.shucan[0].repeat).toBe('day');
    expect(result.shucan[1].title).toBe('title2');
    expect(result.shucan[1].repeat).toBe('week');
  });
});
