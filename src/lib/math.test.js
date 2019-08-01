import { sum } from './math';
import { fetchVeryBigDataFromServer } from './fetchVeryBigDataFromServer';

jest.mock('./fetchVeryBigDataFromServer');
fetchVeryBigDataFromServer.mockImplementation(() => 'Fetching prevented');

test('5 sum 3 is equal 8', () => {
    expect(sum(5, 3, 2, -2, 0)).toBe(8);
});

test('should fetchVeryBigDataFromServer be called 1 time', () => {
    expect(fetchVeryBigDataFromServer.mock.calls.length).toBe(1);
});
