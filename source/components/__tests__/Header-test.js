jest.dontMock('../Header.react');

describe('Header component', function() {
	it('renders provided header text', function() {
		var React = require('react');
		var ReactDOM = require('react-dom');
		var ReactTestUtils = require('react-addons-test-utils');
		var Header = require('../Header.react');

		var header = ReactTestUtils.renderIntoDocument(
			<Header text="Testing..." />
		);
		var actualHeaderText = ReactDOM.findDOMNode(header).textContent;

		expect(actualHeaderText).toBe('Testing...');

		var defaultHeader = ReactTestUtils.renderIntoDocument(
			<Header />
		);
		var actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;

		expect(actualDefaultHeaderText).toBe('Default header');
	});
});