/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./node_modules/ansi-styles/index.js":
/*!*******************************************!*\
  !*** ./node_modules/ansi-styles/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function assembleStyles () {
	var styles = {
		modifiers: {
			reset: [0, 0],
			bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		colors: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39]
		},
		bgColors: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49]
		}
	};

	// fix humans
	styles.colors.grey = styles.colors.gray;

	Object.keys(styles).forEach(function (groupName) {
		var group = styles[groupName];

		Object.keys(group).forEach(function (styleName) {
			var style = group[styleName];

			styles[styleName] = group[styleName] = {
				open: '\u001b[' + style[0] + 'm',
				close: '\u001b[' + style[1] + 'm'
			};
		});

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	});

	return styles;
}

Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/bytes/index.js":
/*!*************************************!*\
  !*** ./node_modules/bytes/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;

/**
 * Module variables.
 * @private
 */

var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

var map = {
  b:  1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: ((1 << 30) * 1024)
};

// TODO: use is-finite module?
var numberIsFinite = Number.isFinite || function (v) { return typeof v === 'number' && isFinite(v); };

var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;

/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */

function bytes(value, options) {
  if (typeof value === 'string') {
    return parse(value);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unit=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */

function format(value, options) {
  if (!numberIsFinite(value)) {
    return null;
  }

  var mag = Math.abs(value);
  var thousandsSeparator = (options && options.thousandsSeparator) || '';
  var unitSeparator = (options && options.unitSeparator) || '';
  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
  var fixedDecimals = Boolean(options && options.fixedDecimals);
  var unit = (options && options.unit) || '';

  if (!unit || !map[unit.toLowerCase()]) {
    if (mag >= map.tb) {
      unit = 'TB';
    } else if (mag >= map.gb) {
      unit = 'GB';
    } else if (mag >= map.mb) {
      unit = 'MB';
    } else if (mag >= map.kb) {
      unit = 'kB';
    } else {
      unit = 'B';
    }
  }

  var val = value / map[unit.toLowerCase()];
  var str = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  return str + unitSeparator + unit;
}

/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */

function parse(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  // Test if the string passed is valid
  var results = parseRegExp.exec(val);
  var floatValue;
  var unit = 'b';

  if (!results) {
    // Nothing could be extracted from the given string
    floatValue = parseInt(val, 10);
    unit = 'b'
  } else {
    // Retrieve the value and the unit
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}


/***/ }),

/***/ "./node_modules/chalk/index.js":
/*!*************************************!*\
  !*** ./node_modules/chalk/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var escapeStringRegexp = __webpack_require__(/*! escape-string-regexp */ "./node_modules/escape-string-regexp/index.js");
var ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/ansi-styles/index.js");
var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");
var hasAnsi = __webpack_require__(/*! has-ansi */ "./node_modules/has-ansi/index.js");
var supportsColor = __webpack_require__(/*! supports-color */ "./node_modules/supports-color/index.js");
var defineProps = Object.defineProperties;
var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

function Chalk(options) {
	// detect mode if not set manually
	this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
}

// use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001b[94m';
}

var styles = (function () {
	var ret = {};

	Object.keys(ansiStyles).forEach(function (key) {
		ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

		ret[key] = {
			get: function () {
				return build.call(this, this._styles.concat(key));
			}
		};
	});

	return ret;
})();

var proto = defineProps(function chalk() {}, styles);

function build(_styles) {
	var builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder.enabled = this.enabled;
	// __proto__ is used because we must return a function, but there is
	// no way to create a function with a different prototype.
	/* eslint-disable no-proto */
	builder.__proto__ = proto;

	return builder;
}

function applyStyle() {
	// support varags, but simply cast to string in case there's only one arg
	var args = arguments;
	var argsLen = args.length;
	var str = argsLen !== 0 && String(arguments[0]);

	if (argsLen > 1) {
		// don't slice `arguments`, it prevents v8 optimizations
		for (var a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || !str) {
		return str;
	}

	var nestedStyles = this._styles;
	var i = nestedStyles.length;

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	var originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
		ansiStyles.dim.open = '';
	}

	while (i--) {
		var code = ansiStyles[nestedStyles[i]];

		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;
	}

	// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
	ansiStyles.dim.open = originalDim;

	return str;
}

function init() {
	var ret = {};

	Object.keys(styles).forEach(function (name) {
		ret[name] = {
			get: function () {
				return build.call(this, [name]);
			}
		};
	});

	return ret;
}

defineProps(Chalk.prototype, init());

module.exports = new Chalk();
module.exports.styles = ansiStyles;
module.exports.hasColor = hasAnsi;
module.exports.stripColor = stripAnsi;
module.exports.supportsColor = supportsColor;


/***/ }),

/***/ "./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),

/***/ "./node_modules/has-ansi/index.js":
/*!****************************************!*\
  !*** ./node_modules/has-ansi/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js");
var re = new RegExp(ansiRegex().source); // remove the `g` flag
module.exports = re.test.bind(re);


/***/ }),

/***/ "./node_modules/humanize-number/index.js":
/*!***********************************************!*\
  !*** ./node_modules/humanize-number/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function(n, options){
  options = options || {};
  var d = options.delimiter || ',';
  var s = options.separator || '.';
  n = n.toString().split('.');
  n[0] = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + d);
  return n.join(s);
};

/***/ }),

/***/ "./node_modules/koa-logger/index.js":
/*!******************************************!*\
  !*** ./node_modules/koa-logger/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Module dependencies.
 */


const Counter = __webpack_require__(/*! passthrough-counter */ "./node_modules/passthrough-counter/index.js")
const humanize = __webpack_require__(/*! humanize-number */ "./node_modules/humanize-number/index.js")
const bytes = __webpack_require__(/*! bytes */ "./node_modules/bytes/index.js")
const chalk = __webpack_require__(/*! chalk */ "./node_modules/chalk/index.js")
const util = __webpack_require__(/*! util */ "util")

/**
 * Expose logger.
 */

module.exports = dev

/**
 * Color map.
 */

const colorCodes = {
  7: 'magenta',
  5: 'red',
  4: 'yellow',
  3: 'cyan',
  2: 'green',
  1: 'green',
  0: 'yellow'
}

/**
 * Development logger.
 */

function dev (opts) {
  // print to console helper.
  const print = (function () {
    let transporter
    if (typeof opts === 'function') {
      transporter = opts
    } else if (opts && opts.transporter) {
      transporter = opts.transporter
    }

    return function printFunc (...args) {
      let str = util.format(...args)
      if (transporter) {
        transporter(str, args)
      } else {
        console.log(...args)
      }
    }
  }())

  return async function logger (ctx, next) {
    // request
    const start = Date.now()
    print('  ' + chalk.gray('<--') +
      ' ' + chalk.bold('%s') +
      ' ' + chalk.gray('%s'),
        ctx.method,
        ctx.originalUrl)

    try {
      await next()
    } catch (err) {
      // log uncaught downstream errors
      log(print, ctx, start, null, err)
      throw err
    }

    // calculate the length of a streaming response
    // by intercepting the stream with a counter.
    // only necessary if a content-length header is currently not set.
    const length = ctx.response.length
    const body = ctx.body
    let counter
    if (length == null && body && body.readable) {
      ctx.body = body
        .pipe(counter = Counter())
        .on('error', ctx.onerror)
    }

    // log when the response is finished or closed,
    // whichever happens first.
    const res = ctx.res

    const onfinish = done.bind(null, 'finish')
    const onclose = done.bind(null, 'close')

    res.once('finish', onfinish)
    res.once('close', onclose)

    function done (event) {
      res.removeListener('finish', onfinish)
      res.removeListener('close', onclose)
      log(print, ctx, start, counter ? counter.length : length, null, event)
    }
  }
}

/**
 * Log helper.
 */

function log (print, ctx, start, len, err, event) {
  // get the status code of the response
  const status = err
    ? (err.isBoom ? err.output.statusCode : err.status || 500)
    : (ctx.status || 404)

  // set the color of the status code;
  const s = status / 100 | 0
  const color = colorCodes.hasOwnProperty(s) ? colorCodes[s] : 0

  // get the human readable response length
  let length
  if (~[204, 205, 304].indexOf(status)) {
    length = ''
  } else if (len == null) {
    length = '-'
  } else {
    length = bytes(len).toLowerCase()
  }

  const upstream = err ? chalk.red('xxx')
    : event === 'close' ? chalk.yellow('-x-')
    : chalk.gray('-->')

  print('  ' + upstream +
    ' ' + chalk.bold('%s') +
    ' ' + chalk.gray('%s') +
    ' ' + chalk[color]('%s') +
    ' ' + chalk.gray('%s') +
    ' ' + chalk.gray('%s'),
      ctx.method,
      ctx.originalUrl,
      status,
      time(start),
      length)
}

/**
 * Show the response time in a human readable format.
 * In milliseconds if less than 10 seconds,
 * in seconds otherwise.
 */

function time (start) {
  const delta = Date.now() - start
  return humanize(delta < 10000
    ? delta + 'ms'
    : Math.round(delta / 1000) + 's')
}


/***/ }),

/***/ "./node_modules/passthrough-counter/index.js":
/*!***************************************************!*\
  !*** ./node_modules/passthrough-counter/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! util */ "util")
var Transform = __webpack_require__(/*! stream */ "stream").Transform

util.inherits(Counter, Transform)

module.exports = Counter

function Counter(options) {
  if (!(this instanceof Counter))
    return new Counter(options)

  Transform.call(this, options)
  this.length = 0
}

Counter.prototype._transform = function (chunk, encoding, callback) {
  this.length += chunk.length
  this.push(chunk)
  callback()
}

/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = (function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
})();


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-logger */ "./node_modules/koa-logger/index.js");
/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var koa_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-views */ "koa-views");
/* harmony import */ var koa_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _route_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route/router */ "./src/route/router.js");






const routerForAllow = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();

//使用babel编译之后，输出的是跟路径，/
console.log(__dirname);
let staticPath = process.cwd()+"/dist/static";
app.use(koa_static__WEBPACK_IMPORTED_MODULE_3___default()(staticPath));

// Must be used before any router is used
// 无模板引擎
// app.use(views(process.cwd() + '/dist/views'));
// ejs模板引擎
// 配置扩展名 ejs
app.use(koa_views__WEBPACK_IMPORTED_MODULE_4___default()(process.cwd() + '/dist/views', {
    extension: 'ejs'
    // map: {html: 'ejs'}
}))

//日志处理
app.use(koa_logger__WEBPACK_IMPORTED_MODULE_2___default()());
// 使用路由中间件
app.use(_route_router__WEBPACK_IMPORTED_MODULE_5__["default"].router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(8113);

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/route/router.js":
/*!*****************************!*\
  !*** ./src/route/router.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
// 定义路由

// 路由配置
const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a(
    {
        prefix: '/api'//每一个路由的前缀
    }
);

router
    .get('/koa-test', async (ctx) => {
        ctx.body = "koa-router api";
    });


router
    .get('/koa-view', async (ctx) => {
        await ctx.render('index', {
            user: 'John'
        });
    })
    .get('/koa-ejs', async (ctx) => {
        await ctx.render('home', {
            title: 'home page',
            user: 'John',
        });
    });

/* harmony default export */ __webpack_exports__["default"] = ({
    router: router,
});


/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),

/***/ "koa-views":
/*!****************************!*\
  !*** external "koa-views" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-views");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map