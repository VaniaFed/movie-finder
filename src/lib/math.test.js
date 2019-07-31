import { sum } from './math';

test('5 sum 3 is equal 8', () => {
    expect(sum(5, 3, 2, -2, 0)).toBe(8);
});
