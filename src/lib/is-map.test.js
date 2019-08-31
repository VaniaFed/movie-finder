import { isMap } from './is-map';

// get two objects
// return true if both of them are equal
// если в changeOption указаны поля, то проверять нужно только их
// если changeOption не задан, проверять все поля
describe('isMap', () => {
    const data = {
        name: 'Ivan',
        age: 19
    };
    const target = {
        name: 'Ivan',
        age: 20
    };

    it('should return false without third param', () => {
        expect(isMap(data, target)).toBe(false);
    });

    it('should return true because name don\'t change', () => {
        expect(isMap(data, target, ['name'])).toBe(true);
    });

    it('should return false because age aren\'t equal', () => {
        expect(isMap(data, target, ['age'])).toBe(false);
    });

    it('should return false because age changed', () => {
        expect(isMap(data, target, ['name', 'age'])).toBe(false);
    });
});
