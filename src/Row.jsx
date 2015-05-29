'use strict';

var React = require('react');
var classnames = require('classnames');

var Row = React.createClass({
    propType: {
        className: React.PropTypes.string
    },

    render: function () {
        var classNames = classnames(
            'pure-u-1',
            this.props.className
        );

        return (
            <div className={classNames}>{this.props.children}</div>
        );
    }
});

module.exports = Row;
