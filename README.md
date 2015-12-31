# DEPRECATED

This module is abandoned. If you want you want to work on it feel free to make PR.

# react-purecss

[![Travis](https://img.shields.io/travis/rezzza/react-purecss.svg)](https://travis-ci.org/rezzza/react-purecss) [![npm](https://img.shields.io/npm/v/react-purecss.svg)](https://www.npmjs.com/package/react-purecss)

Yahoo's purecss library integration with react.

## Installation

```
npm install --save react-pure purecss
```

Purecss styles are not included in this library. You need to include them manually in your page. See [the official doc for help](http://purecss.io/start/).

 

## Usage

Here a simple grid example. 

```javascript
var Grid = require('react-purecss').Grid;
var Row = require('react-purecss').Row;
var Col = require('react-purecss').Col;


var React = require('react');

var Foo = React.createClass({
    render: function () {
        return (
            <Grid>
                <Row>
                    <Col defaultSize="1-2" largeSize="1-4">Some content</Col>
                    <Col defaultSize="1-2" largeSize="3-4">Some content</Col>
                </Row>
                <Row>
                    <Col defaultSize="2-24" smallSize="4-25">Some content</Col>
                    <Col defaultSize="22-24" smallSize="21-25">Some content</Col>
                </Row>
            </Grid>
        );
    }
});

module.exports = Foo;
```

## Documentation

As documentation, you can have a look to [the test files](https://github.com/rezzza/react-purecss/tree/master/test).

### Pure Grids

[Official documentation](http://purecss.io/grids/).

#### Grid

```html
<Grid clasNamme="my-grid">...</Grid>
```

Will output:

```html
<div class="pure-g my-grid">...</div>
```

#### Row

A `Row` is a Pure grid unit with full with:

```html
<div class="pure-u-1">...</div>
```

It's design to add meaning to your grid. It's optional.


#### Col

```html
<Col clasNamme="my-col" defaultSize="2-5" mediumSize="1-5">...</Col>
```

Will output:

```html
<div class="pure-u-2-5 pure-u-md-1-5 my-col">...</div>
```

The `defaultSize` attribute define the grid unit size on mobile `pure-u-*`.

On responsive grid, you can use:

- `smallSize`: `pure-u-sm-*`
- `mediumSize`: `pure-u-md-*`
- `largeSize`: `pure-u-lg-*`
- `extraLargeSize`: `pure-u-xl-*`
