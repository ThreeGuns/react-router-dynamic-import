/**
 * Create by cl on 2018/6/22
 */

// import JestModule from '../src/jest-module';

import React from 'react';
import PureComponentForJest from '../src/jest-module/components/PureComponentForJest';
import JestModuleRoot from '../src/jest-module/containers/Root';
import HomeComponent from '../src/jest-module/components/HomeComponent';
import renderer from 'react-test-renderer';

test('jest-module test', () => {
    const component = renderer.create(<PureComponentForJest/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const jestModuleRoot = renderer.create(<JestModuleRoot/>);
    let tree2 = jestModuleRoot.toJSON();
    expect(tree2).toMatchSnapshot();

    const homeComponent = renderer.create(<HomeComponent/>);
    let tree3 = homeComponent.toJSON();
    //console.log(tree3);
    // homeComponent.props.clickBtn();
});