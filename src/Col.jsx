'use strict';

var React = require('react');
var classnames = require('classnames');

// Todo: validate the grid unit size.
//var units = [
//    // 5ths-Based Units
//    {'1-5': 1 / 5},
//    {'2-5': 2 / 5},
//    {'3-5': 3 / 5},
//    {'4-5': 4 / 5},
//    {'1-5': 1}
//
//    // 24ths-Based Units
//    // ...
//];

var Col = React.createClass({
    propType: {
        className: React.PropTypes.string,
        defaultSize: React.PropTypes.string,
        smallSize: React.PropTypes.string,
        mediumSize: React.PropTypes.string,
        largeSize: React.PropTypes.string,
        extraLargeSize: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            defaultSize: 1
        };
    },

    render: function () {
        var classNames = classnames(
            this.props.defaultSize && Col.prepareSize('pure-u-', this.props.defaultSize),
            this.props.smallSize && Col.prepareSize('pure-u-sm-', this.props.smallSize),
            this.props.mediumSize && Col.prepareSize('pure-u-md-', this.props.mediumSize),
            this.props.largeSize && Col.prepareSize('pure-u-lg-', this.props.largeSize),
            this.props.extraLargeSize && Col.prepareSize('pure-u-xl-', this.props.extraLargeSize),
            this.props.className
        );

        return (
            <div className={classNames}>{this.props.children}</div>
        );
    }
});

Col.prepareSize = function (prefix, size) {
    return prefix + size;
};

module.exports = Col;
