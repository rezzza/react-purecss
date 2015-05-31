'use strict';

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

describe('A Col', function () {
    jsdom();

    it('should be by default a full width purecss grid unit.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1');
    });

    it('should allow customizing the grid unit size for mobile.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col defaultSize="2-24" />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-2-24');
    });

    it('should allow customizing the grid unit size for small screen.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col smallSize="3-5" />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1 pure-u-sm-3-5');
    });

    it('should allow customizing the grid unit size for medium screen.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col mediumSize="4-12" />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1 pure-u-md-4-12');
    });

    it('should allow customizing the grid unit size for large screen.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col largeSize="4-24" />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1 pure-u-lg-4-24');
    });

    it('should allow customizing the grid unit size for extra large screen.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col extraLargeSize="5-24" />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1 pure-u-xl-5-24');
    });


    it('should allow customizing multiple grid unit size at the same time.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col
                defaultSize="1-2"
                smallSize="1-3"
                mediumSize="1-4"
                largeSize="1-5"
                extraLargeSize="1-6"
            />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal(
            'pure-u-1-2 pure-u-sm-1-3 pure-u-md-1-4 pure-u-lg-1-5 pure-u-xl-1-6'
        );
    });

    it('should allow custom class.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col className='foo' />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-u-1 foo');
    });

    it('should keep intact child node.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Col = require('../index').Col;

        var component = TestUtils.renderIntoDocument(
            <Col>
                <p className="bar">Hello world!</p>
            </Col>
        );

        expect(function () {
            TestUtils.findRenderedDOMComponentWithClass(component, 'bar');
        }).to.not.throw();

    });
});
