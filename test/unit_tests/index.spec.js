// If a global document does not exists, create one using jsdom.
require('testdom')('<html><body></body></html>');

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../../src/js/containers/app';

describe('Component Foo', function() {
	it ('should have a class named foo', function() {
		const wrapper = shallow(<App />);
		expect(wrapper.is('.app')).to.equal(true);
	});
});