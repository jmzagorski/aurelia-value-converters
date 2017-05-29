import {DateFormatValueConverter} from '../src/date-format';

describe('the date format date value converter', () => {
  let sut;

  beforeEach(() => {
    sut = new DateFormatValueConverter();
  });

  it('does nothing when no value is passed', () => {
    expect(() => sut.toView).not.toThrow();
  });

  [ {actual: 'MMDDYYYY', expected: '09122011'},
    {actual: null, expected: '9/12/2011 5:01 am'},
    {actual: undefined, expected: '9/12/2011 5:01 am'},
    {actual: '', expected: '9/12/2011 5:01 am'}
  ].forEach(data => {
    it('sets the date format', () => {
      const strDate = '2011-09-12 05:01:00';

      const formatted = sut.toView(strDate, data.actual);

      expect(formatted).toEqual(data.expected);
    });
  });

  it('converts the string to a date object', () => {
    const dt = sut.fromView('2011-12-02 6:01:00');

    expect(dt instanceof Date).toBeTruthy();
    expect(dt.getFullYear()).toEqual(2011);
    expect(dt.getMonth() + 1).toEqual(12);
    expect(dt.getDate()).toEqual(2);
  });
});
