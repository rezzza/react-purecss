'use strict';

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

describe('A Row', function () {
    jsdom();

    it('should be a full width purecss grid unit.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Row = require('../index').Row;

        var component = TestUtils.renderIntoDocument(
            <Row />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1');
    });

    it('should allow custom class.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Row = require('../index').Row;

        var component = TestUtils.renderIntoDocument(
            <Row className='foo' />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1 foo');
    });

    it('should keep intact child node.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Row = require('../index').Row;

        var component = TestUtils.renderIntoDocument(
            <Row>
                <p className="bar">Hello world!</p>
            </Row>
        );

        expect(function() {
            TestUtils.findRenderedDOMComponentWithClass(component, 'bar');
        }).to.not.throw();

    });
});
