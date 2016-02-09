# angular-nl2br-filter [![Build Status](https://travis-ci.org/sdvg/angular-nl2br-filter.svg?branch=master)](https://travis-ci.org/sdvg/angular-nl2br-filter)

> Angular 1.x filter that converts newlines to `<br>`-tags.


## Install

NPM:

```
$ npm install --save angular-nl2br-filter
```

Bower:

```
$ bower install --save angular-nl2br-filter 
```


## Usage

1. Add `nl2br-filter` as a dependency to your module: `angular.module('app', ['nl2br-filter'])`
2. Use `ng-bind-html` and the `nl2br` filter to show a string with newlines: `<p ng-bind-html="testString | nl2br"></p>`

There's also a small demo for this: [demo.html](demo.html).


## License

MIT © [Stefan Dietz](https://github.com/sdvg)
