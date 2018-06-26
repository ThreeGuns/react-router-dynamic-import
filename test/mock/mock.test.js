/**
 * Create by cl on 2018/6/25
 */

import forEach from './forEach';

jest.mock('../sum');

import sum from '../sum';

describe('mock', () => {
    it('forEach', () => {
        const fn = jest.fn();
        forEach([1, 2, 4], fn);
        expect(fn.mock.calls.length).toBe(3);
        expect(fn.mock.calls[2][0]).toBe(4)
    });
    it('test sum mockImplementation', () => {
        sum.mockImplementation(() => 15);
        expect(sum(1, 2)).toBe(15);
    })
});