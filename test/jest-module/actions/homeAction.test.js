/**
 * Create by cl on 2018/6/25
 */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {clickAddOne, clickAddOneAsync, clickReduceOne} from '../../../src/jest-module/actions/homeAction';

describe('homeAction sync', () => {
    it('clickReduce one', () => {
        const reduceOne = clickReduceOne();
        expect(reduceOne).toEqual({
            type: 'reduceOne'
        });
    });
});

describe('homeAction async', () => {
    let store;
    beforeEach(() => {
        store = mockStore({cnt: 3});
    });

    it('redux-thunk clickAddOne', () => {
        store.dispatch(clickAddOne());
        expect(store.getActions()).toEqual([{type: 'addOne'}]);
    });

    it('redux-thunk clickAddOneAsync', () => {
        store.dispatch(clickAddOneAsync()).then(() => {
            expect(store.getActions()).toEqual([{type: 'addOneAsync'}]);
        });
    });
});