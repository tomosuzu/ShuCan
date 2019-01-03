import Shucan, { ShucanState, addShucan, RepeatType } from './Shucan';

describe('Shucan', () => {
  it('add Shucan\'s title', () => {
    const state: ShucanState = { shucan: [] };
    Shucan(state, addShucan('title1', RepeatType.day));
    const result = Shucan(state, addShucan('title2', RepeatType.week));

    expect(result.shucan[0].title).toBe('title1');
    expect(result.shucan[0].repeat).toBe(RepeatType.day);
    expect(result.shucan[1].title).toBe('title2');
    expect(result.shucan[1].repeat).toBe(RepeatType.week);
  });
});
