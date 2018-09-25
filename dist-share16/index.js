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

/***/ "./src/config/config.dev.js":
/*!**********************************!*\
  !*** ./src/config/config.dev.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by zhouli on 18/9/24
 * 配置信息
 */
let config = {
    port: 8113,
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mac123',
        database: 'tech_share_dev',
        port: '3306'
    },
    secret:{
        sign:"secret"
    }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/config/config.prod.js":
/*!***********************************!*\
  !*** ./src/config/config.prod.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by zhouli on 18/9/25
 * 配置信息
 */
let config = {
    port: 8113,
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mac123',
        database: 'tech_share_prod',
        port: '3306'
    },
    secret:{
        sign:"secret"
    }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.dev.js */ "./src/config/config.dev.js");
/* harmony import */ var _config_prod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.prod.js */ "./src/config/config.prod.js");
/**
 * Created by zhouli on 2018/9/25.
 */


const env = "development" || 'development';
let conf = _config_dev_js__WEBPACK_IMPORTED_MODULE_0__["default"];
if(env === "prod"){
    conf = _config_prod_js__WEBPACK_IMPORTED_MODULE_1__["default"];
}
/* harmony default export */ __webpack_exports__["default"] = (conf);

/***/ }),

/***/ "./src/controller/LoginController.js":
/*!*******************************************!*\
  !*** ./src/controller/LoginController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_user_LoginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/user/LoginService */ "./src/service/user/LoginService.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.dev */ "./src/config/config.dev.js");
/**
 * Created by zhouli on 18/8/23
 */




async function loginController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    // ctx.body = "登录接口";
    let res = await Object(_service_user_LoginService__WEBPACK_IMPORTED_MODULE_0__["default"])(query.mobile, query.password);
    // ctx.body = res.data;
    // console.log(res);

    // 登录成功，签发token
    if(res.data && res.message === "SUCCESS"){
        let userToken = res.data;
        let access_token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(userToken, _config_config_dev__WEBPACK_IMPORTED_MODULE_2__["default"].secret.sign, {expiresIn: '1h'}) ;
        let refresh_token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(userToken, _config_config_dev__WEBPACK_IMPORTED_MODULE_2__["default"].secret.sign, {expiresIn: '168h'}) ;
        res.data.access_token = access_token;
        res.data.refresh_token = refresh_token;
        //把这个token，加到登陆接口的响应体里面去
        ctx.body = res;
    }

}
/* harmony default export */ __webpack_exports__["default"] = (loginController);


/***/ }),

/***/ "./src/controller/index.js":
/*!*********************************!*\
  !*** ./src/controller/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by zhouli on 18/9/24
 */
async function indexController(ctx, next) {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Cache-Control', 'no-cache');
    await next();
}
/* harmony default export */ __webpack_exports__["default"] = (indexController);



/***/ }),

/***/ "./src/controller/roleAddController.js":
/*!*********************************************!*\
  !*** ./src/controller/roleAddController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_role_createService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/role/createService */ "./src/service/role/createService.js");
/**
 * Created by zhouli on 18/8/23
 */

async function roleAddController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    let res = await Object(_service_role_createService__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(query.id),query.name);
    ctx.body = "创建成功";
    console.log(res);
}
/* harmony default export */ __webpack_exports__["default"] = (roleAddController);


/***/ }),

/***/ "./src/controller/roleController.js":
/*!******************************************!*\
  !*** ./src/controller/roleController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/role */ "./src/models/role.js");
/**
 * Created by zhouli on 18/8/23
 */

async function roleController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    let res = await _models_role__WEBPACK_IMPORTED_MODULE_0__["default"].findOne();
    console.log(res)
    let id = res.get('name');
    ctx.body = id;
}
/* harmony default export */ __webpack_exports__["default"] = (roleController);


/***/ }),

/***/ "./src/controller/userController.js":
/*!******************************************!*\
  !*** ./src/controller/userController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ "./src/models/user.js");
/**
 * Created by zhouli on 18/8/23
 */

async function roleController(ctx) {
    let params = ctx.params;
    let data = ctx.request.body;
    let query = ctx.query;
    console.log("------");
    console.log(params);
    console.log(data);
    console.log(query);
    let res = await _models_user__WEBPACK_IMPORTED_MODULE_0__["default"].findOne();
    console.log(res)
    let id = res.get('name');
    ctx.body = id;
}
/* harmony default export */ __webpack_exports__["default"] = (roleController);


/***/ }),

/***/ "./src/dao/fee.js":
/*!************************!*\
  !*** ./src/dao/fee.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/query */ "./src/utils/query.js");
/**
 * Created by zhouli on 18/9/25
 */
/*
* 费用
*
* id id
* 标题 title
* 描述 des
* 总共 total
* 时间 date_at
* 关联用户id u_id
* */


const sql = {
    insert: `
    INSERT INTO fee(title, des, total, date_at,u_id)
    VALUES(?, ?, ?, ?, ?)
  `,
    delete: `
    DELETE FROM fee
    WHERE id=?
  `,
    update: `
    UPDATE fee SET
      title=?,
      des=?,
      total=?,
      date_at=?,
      u_id=?
    WHERE id=?
  `,
    getList: `
    SELECT *
    FROM fee
  `,

    find: `
    SELECT *
    FROM fee
    WHERE id=?
  `,
    search: `
    SELECT *
    FROM fee
    WHERE title like ? or des like ?
  `
};

async function insertFeeDao(title, des, total, date_at, u_id) {
    console.log(title, des, total, date_at, u_id);
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.insert, [title, des, total, date_at, u_id]);
}

async function deleteFeeDao(id) {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.delete, [id]);
}

async function updateFeeDao(title, des, total, date_at, u_id, id) {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.update, [title, des, total, date_at, u_id, id]);
}

async function getFeeListDao() {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.getList, []);
}

async function getFeeDao(id) {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.find, [id]);
}

async function searchFeeDao(title, des) {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.search, [title, des]);
}

//添加费用
//删除费用
//修改数据
//获取费用列表
//搜索费用
//查询费用通过ID

let feeDao = {
    insertFeeDao,
    deleteFeeDao,
    updateFeeDao,
    getFeeListDao,
    searchFeeDao,
    getFeeDao
};
/* harmony default export */ __webpack_exports__["default"] = (feeDao);

/***/ }),

/***/ "./src/dao/user.js":
/*!*************************!*\
  !*** ./src/dao/user.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/query */ "./src/utils/query.js");
/**
 * Created by zhouli on 18/9/24
 */
/*
* 用户
* 电话
* 密码
* */


const sql = {
    login: `
    SELECT password, id
    FROM user
    WHERE mobile=?
  `,
    register: `
    INSERT INTO user(id,name,password,mobile)
      VALUES(?, ?, ?, ?)
  `,
    edit: `
    UPDATE user SET name=?, password=?,mobile=?
    WHERE id=?
  `
};

//登陆
async function loginDao(phone, password) {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.login, [phone, password]);
}
//注册
async function registerDao(id, name, password, phone) {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.register, [id, name, password, phone]);
}
//修改
async function editDao(name, password, phone, userId) {
    return await Object(_utils_query__WEBPACK_IMPORTED_MODULE_0__["default"])(sql.edit, [name, password, phone, userId]);
}
let userDao = {
    registerDao,
    loginDao,
    editDao
};
/* harmony default export */ __webpack_exports__["default"] = (userDao);


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
/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-jwt */ "koa-jwt");
/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var koa2_swagger_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa2-swagger-ui */ "koa2-swagger-ui");
/* harmony import */ var koa2_swagger_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa2_swagger_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _controller_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controller/index */ "./src/controller/index.js");
/* harmony import */ var _config_config_dev_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/config.dev.js */ "./src/config/config.dev.js");
/* harmony import */ var _middleware_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middleware/error */ "./src/middleware/error.js");
/* harmony import */ var koa_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! koa-views */ "koa-views");
/* harmony import */ var koa_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(koa_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _route_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./route/router */ "./src/route/router.js");










//拦截校验token，解密token




const routerForAllow = new koa_router__WEBPACK_IMPORTED_MODULE_1___default.a();
const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
//使用babel编译之后，输出的是跟路径，/
console.log(__dirname);
let staticPath = process.cwd()+"/dist/static";
app.use(koa_static__WEBPACK_IMPORTED_MODULE_3___default()(staticPath));

//排除某些接口,不校验
app.use(koa_jwt__WEBPACK_IMPORTED_MODULE_4___default()({secret: _config_config_dev_js__WEBPACK_IMPORTED_MODULE_8__["default"].secret.sign}).unless({path: [
    /^\/api\/login/,
    /^\/doc/,//文档忽略
    /^\/swagger/,
    /^\/api\/register/
]}));

app.use(
    koa2_swagger_ui__WEBPACK_IMPORTED_MODULE_6___default()({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            url: 'http://localhost:8113/doc.json', // example path to json
            //json可以考虑模块导入，复用
        },
    }),
);
//token错误校验必须在 koaJwt 之后
app.use(Object(_middleware_error__WEBPACK_IMPORTED_MODULE_9__["default"])());

// Must be used before any router is used
// 无模板引擎
// app.use(views(process.cwd() + '/dist/views'));
// ejs模板引擎
// 配置扩展名 ejs
app.use(koa_views__WEBPACK_IMPORTED_MODULE_10___default()(process.cwd() + '/dist/views', {
    extension: 'ejs'
    // map: {html: 'ejs'}
}))

//日志处理
app.use(koa_logger__WEBPACK_IMPORTED_MODULE_2___default()());
//请求体处理
app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_5___default()());
//统一错误处理
app.on('error', function (err, ctx) {
    console.log(err);
    console.log(ctx);
});

// 使用路由中间件
app.use(_controller_index__WEBPACK_IMPORTED_MODULE_7__["default"])
    .use(_route_router__WEBPACK_IMPORTED_MODULE_11__["default"].router.routes())
    .use(routerForAllow.allowedMethods());

//服务端口
app.listen(_config_config_dev_js__WEBPACK_IMPORTED_MODULE_8__["default"].port);

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/middleware/error.js":
/*!*********************************!*\
  !*** ./src/middleware/error.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return error; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index */ "./src/config/index.js");
/**
 * Created by zhouli on 18/9/25
 */


function error() {
    return async function (ctx, next) {
        try {
            const token = ctx.header.authorization ; // 获取jwt
            console.log(token)
            if(token) {
                let payload;
                try {
                    let _userToken = token.split(" ")[1];//token中还有其他信息,Bearer
                    console.log(_userToken)
                    console.log("解码...")
                    payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(_userToken, _config_index__WEBPACK_IMPORTED_MODULE_1__["default"].secret.sign);//解密userToken
                    console.log("解码结果")
                    console.log(payload)
                    ctx.user = {
                        id: payload.id
                    }
                } catch (err) {
                    console.log('不合法token: ', err)
                }
                await next()
            }
        } catch (err) {
            if (err.status === 401) {
                ctx.body = {
                    code: -1,
                    message: '认证失败'
                }
            } else {
                err.status = 404;
                ctx.body = '404';
                console.log('错误有点离谱，无法识别错误：', err)
            }
        }
    }
}


/***/ }),

/***/ "./src/models/permission.js":
/*!**********************************!*\
  !*** ./src/models/permission.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_sequelizeQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/sequelizeQuery */ "./src/utils/sequelizeQuery.js");

const {sequelize, Sequelize} = _utils_sequelizeQuery__WEBPACK_IMPORTED_MODULE_0__["default"];
let role = sequelize.define('permission',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        // tableName: 'permission',
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
/* harmony default export */ __webpack_exports__["default"] = (role);

/***/ }),

/***/ "./src/models/role.js":
/*!****************************!*\
  !*** ./src/models/role.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_sequelizeQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/sequelizeQuery */ "./src/utils/sequelizeQuery.js");
//已写接口样例
//查询role
//创建角色

const {sequelize, Sequelize} = _utils_sequelizeQuery__WEBPACK_IMPORTED_MODULE_0__["default"];
let role = sequelize.define('role',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        // tableName: 'role',
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
/* harmony default export */ __webpack_exports__["default"] = (role);

/***/ }),

/***/ "./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_sequelizeQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/sequelizeQuery */ "./src/utils/sequelizeQuery.js");
//用户模型

const {sequelize, Sequelize} = _utils_sequelizeQuery__WEBPACK_IMPORTED_MODULE_0__["default"];
let user = sequelize.define('user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,//不要默认时间，不然默认生成时间
        // tableName: 'user',
        freezeTableName: true // Model 对应的表名将与model名相同
    }
);
/* harmony default export */ __webpack_exports__["default"] = (user);


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
/* harmony import */ var _controller_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/LoginController */ "./src/controller/LoginController.js");
/* harmony import */ var _controller_roleController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/roleController */ "./src/controller/roleController.js");
/* harmony import */ var _controller_userController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/userController */ "./src/controller/userController.js");
/* harmony import */ var _controller_roleAddController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/roleAddController */ "./src/controller/roleAddController.js");
/* harmony import */ var _service_fee_AddFeeService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/fee/AddFeeService */ "./src/service/fee/AddFeeService.js");
/* harmony import */ var _service_fee_DeleteFeeService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/fee/DeleteFeeService */ "./src/service/fee/DeleteFeeService.js");
/* harmony import */ var _service_fee_UpdateFeeService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/fee/UpdateFeeService */ "./src/service/fee/UpdateFeeService.js");
/* harmony import */ var _service_fee_SearchFeeService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/fee/SearchFeeService */ "./src/service/fee/SearchFeeService.js");
/* harmony import */ var _service_fee_GetFeeListService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/fee/GetFeeListService */ "./src/service/fee/GetFeeListService.js");
/* harmony import */ var _service_fee_GetFeeService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/fee/GetFeeService */ "./src/service/fee/GetFeeService.js");
/* harmony import */ var _service_permission_permissionService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/permission/permissionService */ "./src/service/permission/permissionService.js");
// 定义路由






// 费用CURD







//权限curd


// 路由配置
const router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a(
    {
        prefix: '/api'//每一个路由的前缀
    }
);

router
    .get('/koa-test', async (ctx) => {
        ctx.body = "koa-router api";
    })
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
    })
    //测试用get
    .get('/login', _controller_LoginController__WEBPACK_IMPORTED_MODULE_1__["default"])
    .get('/role/add', _controller_roleAddController__WEBPACK_IMPORTED_MODULE_4__["default"])
    .get('/user', _controller_userController__WEBPACK_IMPORTED_MODULE_3__["default"])
    .get('/role', _controller_roleController__WEBPACK_IMPORTED_MODULE_2__["default"])
    //费用curd
    .post('/fee', async (ctx) => {
        let data = ctx.request.body;
        console.log(ctx.user);
        console.log(data);
        let time = new Date();
        console.log(time);
        //从token中解码获取
        let userId = ctx.user.id;
        ctx.body = await Object(_service_fee_AddFeeService__WEBPACK_IMPORTED_MODULE_5__["default"])(data.title, data.des, data.total, time, userId);
    })
    .delete('/fee/:id', async (ctx) => {
        console.log(ctx.params.id);
        //可以做校验
        // let userId = data.userId;
        ctx.body = await Object(_service_fee_DeleteFeeService__WEBPACK_IMPORTED_MODULE_6__["default"])(ctx.params.id);
    })
    .put('/fee', async (ctx) => {
        let data = ctx.request.body;
        console.log(ctx.user);
        console.log(data);
        let time = new Date();
        console.log(time);
        //从token中解码获取
        let userId = ctx.user.id;
        ctx.body = await Object(_service_fee_UpdateFeeService__WEBPACK_IMPORTED_MODULE_7__["default"])(data.title, data.des, data.total, time, userId, data.id);
    })
    .get('/feeList', async (ctx) => {
        ctx.body = await Object(_service_fee_GetFeeListService__WEBPACK_IMPORTED_MODULE_9__["default"])();
    })
    .get('/fee', async (ctx) => {
        //以描述或者名称搜索
        let data = ctx.request.query;
        ctx.body = await Object(_service_fee_SearchFeeService__WEBPACK_IMPORTED_MODULE_8__["default"])(data.title, data.des);
    })
    .get('/fee/:id', async (ctx) => {
        console.log(ctx.params.id);
        ctx.body = await Object(_service_fee_GetFeeService__WEBPACK_IMPORTED_MODULE_10__["default"])(ctx.params.id);
    })
    .post('/permission', async (ctx) => {
        let data = ctx.request.body;
        let permission = await _service_permission_permissionService__WEBPACK_IMPORTED_MODULE_11__["default"].createPermission(data.id,data.name);
        ctx.body = permission;
        console.log(permission);
    })
    .delete('/permission/:id', async (ctx) => {
        let b = await _service_permission_permissionService__WEBPACK_IMPORTED_MODULE_11__["default"].deletePermission(ctx.params.id);
        ctx.body = b;
        console.log(b);
    })
    .put('/permission', async (ctx) => {
        let data = ctx.request.body;
        let permission = await _service_permission_permissionService__WEBPACK_IMPORTED_MODULE_11__["default"].updatePermission(data.id,data.name);
        ctx.body = permission;
        console.log(permission);
    })
    .get('/permission/:id', async (ctx) => {
        let permission = await _service_permission_permissionService__WEBPACK_IMPORTED_MODULE_11__["default"].getPermission(ctx.params.id);
        ctx.body = permission;
        console.log(permission)
    })
    .get('/permission', async (ctx) => {
        let permissions = await _service_permission_permissionService__WEBPACK_IMPORTED_MODULE_11__["default"].getAllPermission();
        ctx.body = permissions;
        console.log(permissions)
    })


/* harmony default export */ __webpack_exports__["default"] = ({
    router: router,
});

// 接口测试
/*先获取token
get
* http://localhost:8113/api/login?mobile=15921552946&password=mac123
*
* http://localhost:8113
*
* get
* http://localhost:8113/api/koa-test
*
* get
* http://localhost:8113/api/koa-ejs
*
* post
* http://localhost:8113/api/fee
* {
    "des":"第一个份额与",
    "title":"test fee1",
    "total":"12",
    "password":"mac1234"
}

get 单个
http://localhost:8113/api/fee/11

put
http://localhost:8113/api/fee
{
    "des":"第一个份额与",
    "title":"test 1111fee1",
    "total":"12",
    "id":12,
    "password":"mac1234"
}

get 列表
http://localhost:8113/api/feelist

get 搜索
http://localhost:8113/api/fee?title=1111fee1&des=1

permission

post
http://localhost:8113/api/permission
{
    "name":"经理",
    "id":1
}

delete
http://localhost:8113/api/permission/1

put
http://localhost:8113/api/permission
{
    "name":"经理111",
    "id":1
}

get 查询某一个
http://localhost:8113/api/permission/2

get 查询所有
http://localhost:8113/api/permission


文档 doc
http://localhost:8113/doc.json
* */

/***/ }),

/***/ "./src/service/fee/AddFeeService.js":
/*!******************************************!*\
  !*** ./src/service/fee/AddFeeService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_fee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dao/fee */ "./src/dao/fee.js");
/**
 * Created by zhouli on 18/9/25
 */

const insertFeeDao = _dao_fee__WEBPACK_IMPORTED_MODULE_0__["default"].insertFeeDao;
async function addFeeService(title, des, total, date_at, u_id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await insertFeeDao(title, des, total, date_at, u_id);
        res = {
            status: 1,
            message: 'SUCCESS',
            data: {
                id: data.id
            }
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

/* harmony default export */ __webpack_exports__["default"] = (addFeeService);

/***/ }),

/***/ "./src/service/fee/DeleteFeeService.js":
/*!*********************************************!*\
  !*** ./src/service/fee/DeleteFeeService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_fee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dao/fee */ "./src/dao/fee.js");
/**
 * Created by zhouli on 18/9/25
 */

const deleteFeeDao = _dao_fee__WEBPACK_IMPORTED_MODULE_0__["default"].deleteFeeDao;
async function deleteFeeService(id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await deleteFeeDao(id);
        res = {
            status: 1,
            message: 'SUCCESS'
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

/* harmony default export */ __webpack_exports__["default"] = (deleteFeeService);

/***/ }),

/***/ "./src/service/fee/GetFeeListService.js":
/*!**********************************************!*\
  !*** ./src/service/fee/GetFeeListService.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_fee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dao/fee */ "./src/dao/fee.js");
/**
 * Created by zhouli on 18/9/25
 */

const getFeeListDao = _dao_fee__WEBPACK_IMPORTED_MODULE_0__["default"].getFeeListDao;
async function getFeeListService() {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await getFeeListDao();
        res = {
            status: 1,
            message: 'SUCCESS',
            data: data
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

/* harmony default export */ __webpack_exports__["default"] = (getFeeListService);

/***/ }),

/***/ "./src/service/fee/GetFeeService.js":
/*!******************************************!*\
  !*** ./src/service/fee/GetFeeService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_fee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dao/fee */ "./src/dao/fee.js");
/**
 * Created by zhouli on 18/9/25
 */

const getFeeDao = _dao_fee__WEBPACK_IMPORTED_MODULE_0__["default"].getFeeDao;

async function GetFeeService(id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await getFeeDao(id);
        res = {
            status: 1,
            message: 'SUCCESS',
            data: data[0]
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

/* harmony default export */ __webpack_exports__["default"] = (GetFeeService);

/***/ }),

/***/ "./src/service/fee/SearchFeeService.js":
/*!*********************************************!*\
  !*** ./src/service/fee/SearchFeeService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_fee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dao/fee */ "./src/dao/fee.js");
/**
 * Created by zhouli on 18/9/25
 */

const searchFeeDao = _dao_fee__WEBPACK_IMPORTED_MODULE_0__["default"].searchFeeDao;

async function searchFeeService(title, des) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        let data = await searchFeeDao(`%${title}%`, `%${des}%`);
        res = {
            status: 1,
            message: 'SUCCESS',
            data: data
        }
    } catch (e) {
        console.error(e)
    }
    return res
}

/* harmony default export */ __webpack_exports__["default"] = (searchFeeService);

/***/ }),

/***/ "./src/service/fee/UpdateFeeService.js":
/*!*********************************************!*\
  !*** ./src/service/fee/UpdateFeeService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_fee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dao/fee */ "./src/dao/fee.js");
/* harmony import */ var _GetFeeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetFeeService */ "./src/service/fee/GetFeeService.js");
/**
 * Created by zhouli on 18/9/25
 */

const updateFeeDao = _dao_fee__WEBPACK_IMPORTED_MODULE_0__["default"].updateFeeDao;



async function updateFeeService(title, des, total, date_at, u_id, id) {
    let res = {
        status: 1,
        message: 'FAILURE'
    };
    try {
        await updateFeeDao(title, des, total, date_at, u_id, id);
        res = {
            status: 1,
            message: 'SUCCESS'
        };
        try {
            let data = await Object(_GetFeeService__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
            res.data = data[0]
        }
        catch (e) {
            console.error(e);
        }
    } catch (e) {
        console.error(e);
    }
    return res
}

/* harmony default export */ __webpack_exports__["default"] = (updateFeeService);

/***/ }),

/***/ "./src/service/permission/permissionService.js":
/*!*****************************************************!*\
  !*** ./src/service/permission/permissionService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/permission */ "./src/models/permission.js");


async function createPermission(id, name) {
    let res = await _models_permission__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        id: id,
        name: name
    });
    return res;
}

async function deletePermission(id) {
    let res = await _models_permission__WEBPACK_IMPORTED_MODULE_0__["default"].destroy({
        where: {
            id: id
        }
    });
    // sql
    // let res = await sequelize.query('DELETE * FROM permission WHERE id = ?');
    return res;
}

async function updatePermission(id, name) {
    let res = await _models_permission__WEBPACK_IMPORTED_MODULE_0__["default"].update({
        name: name
    },{
        where: {
            id: id
        }
    });
    return res;
}

async function getPermission(id) {
    let res = await _models_permission__WEBPACK_IMPORTED_MODULE_0__["default"].findById(id);
    return res;
}

async function getAllPermission() {
    let res = await _models_permission__WEBPACK_IMPORTED_MODULE_0__["default"].findAll();
    return res;
}

let permissionService = {
    createPermission,
    deletePermission,
    updatePermission,
    getPermission,
    getAllPermission
}
/* harmony default export */ __webpack_exports__["default"] = (permissionService);

/***/ }),

/***/ "./src/service/role/createService.js":
/*!*******************************************!*\
  !*** ./src/service/role/createService.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/role */ "./src/models/role.js");

async function createService(id,name) {
    let res = await _models_role__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        id: id,
        name: name
    });
    return res;
}
/* harmony default export */ __webpack_exports__["default"] = (createService);

/***/ }),

/***/ "./src/service/user/LoginService.js":
/*!******************************************!*\
  !*** ./src/service/user/LoginService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dao_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dao/user */ "./src/dao/user.js");
/**
 * Created by zhouli on 18/9/24
 */

const loginDao = _dao_user__WEBPACK_IMPORTED_MODULE_0__["default"].loginDao;
/*
  @code
  1:  判断失败
  2:  用户不存在
  3： 用户密码错误
 */
async function loginService(mobile, password) {
    let res = {
        status: 1,
        message: 'FAILURE',
        code: 1
    };
    try {
        let user = await loginDao(mobile, password);
        if (user.length === 0) {
            res = {
                status: 1,
                message: 'FAILURE',
                code: 2
            }
        } else {
            if (password === user[0].password) {
                res = {
                    status: 0,
                    message: 'SUCCESS',
                    data: {
                        id: user[0].id
                    }
                }
            } else {
                res = {
                    status: 1,
                    message: 'FAILURE',
                    code: 3
                }
            }
        }
    } catch (e) {
        console.error(e)
    }
    console.log(res);
    return res
}

/* harmony default export */ __webpack_exports__["default"] = (loginService);

/***/ }),

/***/ "./src/utils/query.js":
/*!****************************!*\
  !*** ./src/utils/query.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ "mysql");
/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index */ "./src/config/index.js");
/**
 * Created by zhouli on 18/9/24
 * 数据库链接查询
 */


let mysqlConf = _config_index__WEBPACK_IMPORTED_MODULE_1__["default"].mysql;
const pool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({
    host: mysqlConf.host,
    user: mysqlConf.user,
    password: mysqlConf.password,
    database: mysqlConf.database,
    port: mysqlConf.port
});

function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

/* harmony default export */ __webpack_exports__["default"] = (query);

/***/ }),

/***/ "./src/utils/sequelizeQuery.js":
/*!*************************************!*\
  !*** ./src/utils/sequelizeQuery.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/index */ "./src/config/index.js");
/**
 * Created by zhouli on 18/9/24
 * Sequelize数据库链接查询
 */


let mysqlConf = _config_index__WEBPACK_IMPORTED_MODULE_1__["default"].mysql;
var sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0___default.a(mysqlConf.database, mysqlConf.user, mysqlConf.password, {
    host: mysqlConf.host,
    dialect: 'mysql',
    port: mysqlConf.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
let db = {
    sequelize,
    Sequelize: (sequelize__WEBPACK_IMPORTED_MODULE_0___default()),//挂载方便使用
}
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-jwt":
/*!**************************!*\
  !*** external "koa-jwt" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-jwt");

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

/***/ "koa2-swagger-ui":
/*!**********************************!*\
  !*** external "koa2-swagger-ui" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa2-swagger-ui");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

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