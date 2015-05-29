'use strict';

var React = require('react');
var classnames = require('classnames');

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

    defaultProps: {
        defaultSize: 1
    },

        render: function () {
        var classNames = classnames(
            this.props.className,
            this.props.defaultSize && this.prepareSize('pure-u-', this.props.defaultSize),
            this.props.smallSize && this.prepareSize('pure-u-sm-', this.props.smallSize),
            this.props.mediumSize && this.prepareSize('pure-u-md-', this.props.mediumSize),
            this.props.largeSize && this.prepareSize('pure-u-lg-', this.props.largeSize),
            this.props.extraLargeSize && this.prepareSize('pure-u-xl-', this.props.extraLargeSize)
        );

        return (
            <div className={classNames}>{this.props.children}</div>
        );
    }
});

Col.prepareSize = function (prefix, size) {
    return prefix + '-' + size;
};

module.exports = Col;
