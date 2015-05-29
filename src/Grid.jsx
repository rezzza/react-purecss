'use strict';

var React = require('react');
var classnames = require('classnames');

var Grid = React.createClass({
    propType: {
        className: React.PropTypes.string
    },

    render: function () {
        var classNames = classnames(
            'pure-g',
            this.props.className
        );

        return (
            <div className={classNames}>{this.props.children}</div>
        );
    }
});

module.exports = Grid;
