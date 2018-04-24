import {SortValueConverter} from '../src/sort';

describe('the sort value converter', () => {
  let sut;

  beforeEach(() => {
    sut = new SortValueConverter();
  });

  [ null,
    undefined,
    []
  ].forEach(array => {
    it('does not throw with no array', () => {
      const ex = () => sut.toView(array);

      expect(ex).not.toThrow();
    });
  });

  [ {propName: null, unsorted: [6, 1, 2], sorted: [1, 2, 6]},
    {propName: undefined, unsorted: [6, 1, 2], sorted: [1, 2, 6]},
    {propName: '', unsorted: [6, 1, 2], sorted: [1, 2, 6]}
  ].forEach(data => {
    it('sorts an array when no property name given', () => {
      const sorted = sut.toView(data.unsorted, data.propName);

      expect(sorted).toEqual(data.sorted);
    });
  });

  [ {dir: 'asc', unsorted: [{id: 3}, {id: 1}, {id: 2} ], sorted: [{id: 1}, {id: 2}, {id: 3}]},
    {dir: '', unsorted: [{id: 3}, {id: 1}, {id: 2} ], sorted: [{id: 1}, {id: 2}, {id: 3}]},
    {dir: null, unsorted: [{id: 3}, {id: 1}, {id: 2} ], sorted: [{id: 1}, {id: 2}, {id: 3}]},
    {dir: undefined, unsorted: [{id: 3}, {id: 1}, {id: 2} ], sorted: [{id: 1}, {id: 2}, {id: 3}]},
    {dir: 'desc', unsorted: [{id: 3}, {id: 1}, {id: 2} ], sorted: [{id: 3}, {id: 2}, {id: 1}]}
  ].forEach(data => {
    it('sorts an number property', () => {
      const sorted = sut.toView(data.unsorted, 'id', data.dir);

      expect(sorted).toEqual(data.sorted);
    });
  });

  // don't need to test different asc dir args since that was tested with the
  // number test above
  [ {dir: 'asc', unsorted: [{id: 'c'}, {id: 'a'}, {id: 'b'} ], sorted: [{id: 'a'}, {id: 'b'}, {id: 'c'}]},
    {dir: 'desc', unsorted: [{id: 'c'}, {id: 'a'}, {id: 'b'} ], sorted: [{id: 'c'}, {id: 'b'}, {id: 'a'}]}
  ].forEach(data => {
    it('sorts an string property', () => {
      const sorted = sut.toView(data.unsorted, 'id', data.dir);

      expect(sorted).toEqual(data.sorted);
    });
  });

  it('sorts a string case insensitive', () => {
    const unsorted = [{id: 'C'}, {id: 'a'}, {id: 'b'} ];
    const expectSort = [{id: 'a'}, {id: 'b'}, {id: 'C'} ];
    const actualSort = sut.toView(unsorted, 'id');

    expect(actualSort).toEqual(expectSort);
  });

  [ {
      dir: 'asc',
      unsorted: [{id: new Date(2012, 1, 6)}, {id: new Date(2011, 2, 5)}, {id: new Date(2012, 1, 1)} ],
      sorted: [{id: new Date(2011, 2, 5)}, {id: new Date(2012, 1, 1)}, {id: new Date(2012, 1, 6)}]
    },
    {
      dir: 'desc',
      unsorted: [{id: new Date(2012, 1, 6)}, {id: new Date(2011, 2, 5)}, {id: new Date(2012, 1, 1)} ],
      sorted: [{id: new Date(2012, 1, 6)}, {id: new Date(2012, 1, 1)}, {id: new Date(2011, 2, 5)}]
    }
  ].forEach(data => {
    it('sorts an date property', () => {
      const sorted = sut.toView(data.unsorted, 'id', data.dir);

      expect(sorted).toEqual(data.sorted);
    });
  });

  it('sorts a nested property', () => {
    const unsorted = [
      { a: 1, nested: { a: new Date(2015, 9, 2) } },
      { a: 2, nested: { a: new Date(2014, 9, 2) } }
    ];

    const sorted = sut.toView(unsorted, 'nested.a');

    expect(sorted).toEqual([
      { a: 2, nested: { a: new Date(2014, 9, 2) } },
      { a: 1, nested: { a: new Date(2015, 9, 2) } }
    ]);
  });
});
