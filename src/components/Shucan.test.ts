import Shucan, { ShucanState, addShucan, RepeatType } from './Shucan';

describe('Shucan', () => {
  let state: ShucanState;
  beforeEach(() => {
    state = { shucan: [] };
  });
  it('add Shucan\'s title & repeat type', () => {
    Shucan(state, addShucan('title1', RepeatType.day));
    const result = Shucan(state, addShucan('title2', RepeatType.week));

    expect(result.shucan[0].title).toBe('title1');
    expect(result.shucan[0].repeat).toBe(RepeatType.day);
    expect(result.shucan[1].title).toBe('title2');
    expect(result.shucan[1].repeat).toBe(RepeatType.week);
  });

  it('add Shucan\'s no option' , () => {
    const result = Shucan(state, addShucan('title2', RepeatType.week));

    expect(result.shucan[0].endDate).toBe(undefined);
  });

  it('add Shucan\'s endDate' , () => {
    const options = {
      endDate: '20180103',
    };
    const result = Shucan(state, addShucan('title2', RepeatType.week, options));

    expect(result.shucan[0].endDate).toBe('20180103');
  });
});
