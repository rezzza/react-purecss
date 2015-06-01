(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}

}());

},{}],2:[function(require,module,exports){
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
    displayName: 'Col',

    propType: {
        className: React.PropTypes.string,
        defaultSize: React.PropTypes.string,
        smallSize: React.PropTypes.string,
        mediumSize: React.PropTypes.string,
        largeSize: React.PropTypes.string,
        extraLargeSize: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            defaultSize: 1
        };
    },

    render: function render() {
        var foo = 'bar';

        var classNames = classnames(this.props.defaultSize && Col.prepareSize('pure-u-', this.props.defaultSize), this.props.smallSize && Col.prepareSize('pure-u-sm-', this.props.smallSize), this.props.mediumSize && Col.prepareSize('pure-u-md-', this.props.mediumSize), this.props.largeSize && Col.prepareSize('pure-u-lg-', this.props.largeSize), this.props.extraLargeSize && Col.prepareSize('pure-u-xl-', this.props.extraLargeSize), this.props.className);

        return React.createElement(
            'div',
            { className: classNames },
            this.props.children
        );
    }
});

Col.prepareSize = function (prefix, size) {
    return prefix + size;
};

module.exports = Col;

},{"classnames":1,"react":"react"}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var classnames = require('classnames');

var Grid = React.createClass({
    displayName: 'Grid',

    propType: {
        className: React.PropTypes.string
    },

    render: function render() {
        var classNames = classnames('pure-g', this.props.className);

        return React.createElement(
            'div',
            { className: classNames },
            this.props.children
        );
    }
});

module.exports = Grid;

},{"classnames":1,"react":"react"}],4:[function(require,module,exports){
'use strict';

var React = require('react');
var classnames = require('classnames');

var Row = React.createClass({
    displayName: 'Row',

    propType: {
        className: React.PropTypes.string
    },

    render: function render() {
        var classNames = classnames('pure-u-1', this.props.className);

        return React.createElement(
            'div',
            { className: classNames },
            this.props.children
        );
    }
});

module.exports = Row;

},{"classnames":1,"react":"react"}],5:[function(require,module,exports){
'use strict';

module.exports = {
    Col: require('./src/Col.jsx'),
    Grid: require('./src/Grid.jsx'),
    Row: require('./src/Row.jsx')
};

},{"./src/Col.jsx":2,"./src/Grid.jsx":3,"./src/Row.jsx":4}]},{},[5])
//# sourceMappingURL=react-purecss.js.map
