'use strict';

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;

describe('A Grid', function () {
    jsdom();

    it('should be a purecss grid.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Grid = require('../index').Grid;

        var component = TestUtils.renderIntoDocument(
            <Grid />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-g');
    });

    it('should allow custom class.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Grid = require('../index').Grid;

        var component = TestUtils.renderIntoDocument(
            <Grid className='foo' />
        );

        var node = React.findDOMNode(component);
        expect(node.className).to.be.equal('pure-g foo');
    });

    it('should keep intact child node.', function () {
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;
        var Grid = require('../index').Grid;

        var component = TestUtils.renderIntoDocument(
            <Grid>
                <p className="bar">Hello world!</p>
            </Grid>
        );

        expect(function() {
            TestUtils.findRenderedDOMComponentWithClass(component, 'bar');
        }).to.not.throw();

    });
});
