import {GroupValueConverter} from '../src/group';

describe('the group by value converter', () => {
  let sut;
  let undefinedData = [null, undefined, ''];

  beforeEach(() => {
    sut = new GroupValueConverter();
  });

  undefinedData.forEach(val => {
    it('does nothing when no array is passed', () => {
      expect(() => sut.toView(val, 'g')).not.toThrow();
    });
  });

  undefinedData.forEach(val => {
    it('does nothing when no group by is passed', () => {
      expect(() => sut.toView([], val)).not.toThrow();
    });
  });

  // test items that would fail the if(!group) because i only want to keep
  // exclude undefined
  it('groups by property name', () => {
    const array = [
      { id: 1, group: 'a'},
      { id: 2, group: 'a'},
      { id: 3, group: null },
      { id: 4, group: false },
      { id: 5, group: '' },
      { id: 6 },
      { id: 7, group: undefined }
    ];

    const grouped = sut.toView(array, 'group');

    expect(grouped).toEqual([
      { group: 'a', values: [{ id: 1, group: 'a'}, { id: 2, group: 'a'}] },
      { group: '', values: [
        { id: 3, group: null },
        { id: 5,  group: '' },
        { id: 6 },
        { id: 7, group: undefined }
      ]},
      { group: 'false', values: [{ id: 4, group: false}] }
    ]);
  });

  it('groups by nested property name', () => {
    // add outer group so it targets correct prop
    const array = [
      { id: 1, group: 'x', nested: { group: 'a' } },
      { id: 2, group: 'y', nested: { group: 'a' } },
      { id: 3, group: 'z', nested: { group: 'b' } }
    ];

    const grouped = sut.toView(array, 'nested.group');

    expect(grouped).toEqual([{
      group: 'a',
      values: [
        { id: 1, group: 'x', nested: { group: 'a' }},
        { id: 2, group: 'y', nested: { group: 'a'}}
      ]}, {
        group: 'b',
        values: [{ id: 3, group: 'z', nested: { group: 'b' }}] }
    ]);
  });
});
