// If a global document does not exists, create one using jsdom.
require('testdom')('<html><body></body></html>');

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../../src/js/containers/app';
var mock = require('mock-require');

var TweenLite = mock('gsap', {
	TweenLite: {
		fromTo: function () {
			return null;
		}
	}
});

describe('The main app component', function() {
	it('renders without crashing', () => {
		mount(<App />);
	});

	it ('should have a class named App', function() {
		const wrapper = shallow(<App />);
		expect(wrapper.is('.app')).to.equal(true);
	});
});