/**
 * Create by cl on 2018/6/25
 */

import homeReducer from '../../../src/jest-module/reducers/homeReducer';

const initStat = {cnt: 1};

describe('homeReducer', () => {
    it('default', () => {
        const defaultStat = homeReducer(initStat, 'unknown');
        expect(defaultStat).toEqual(initStat);
    });

    it('addOne', () => {
        const defaultStat = homeReducer(initStat, {type: 'addOne'});
        expect(defaultStat).toEqual({cnt: initStat.cnt + 1});
    });
});

