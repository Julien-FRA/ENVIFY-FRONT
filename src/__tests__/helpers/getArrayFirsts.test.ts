import { getArrayFirsts } from '@/utils/helpers';

describe('getArrayFirsts', () => {
  it('returns an empty array if input array is undefined', () => {
    const limit = 3;
    const getFirsts = getArrayFirsts(limit);
    const result = getFirsts([]);
    expect(result).toEqual([]);
  });

  it('returns the first n elements of the input array', () => {
    const limit = 3;
    const getFirsts = getArrayFirsts(limit);
    const input = [1, 2, 3, 4, 5];
    const result = getFirsts(input);
    expect(result).toEqual([1, 2, 3]);
  });

  it('returns the whole array if its length is less than or equal to the limit', () => {
    const limit = 3;
    const getFirsts = getArrayFirsts(limit);
    const input = [1, 2, 3];
    const result = getFirsts(input);
    expect(result).toEqual([1, 2, 3]);
  });
});
