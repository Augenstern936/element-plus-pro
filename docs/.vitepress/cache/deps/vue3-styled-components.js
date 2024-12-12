import {
  h,
  inject,
  provide
} from "./chunk-FNEGEEL4.js";
import "./chunk-JVSYCCQQ.js";
import "./chunk-MTI3AIJG.js";

// ../node_modules/.pnpm/vue3-styled-components@1.2.1/node_modules/vue3-styled-components/dist/vue-styled-components.es.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var generateAlphabeticName = function generateAlphabeticName2(code) {
  var lastDigit = chars[code % chars.length];
  return code > chars.length ? "".concat(generateAlphabeticName2(Math.floor(code / chars.length))).concat(lastDigit) : lastDigit;
};
var interleave = function(strings, interpolations) {
  return interpolations.reduce(function(array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var objectTag = "[object Object]";
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e) {
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
var getPrototype = overArg(Object.getPrototypeOf, Object);
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var lodash_isplainobject = isPlainObject;
var _uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
function hyphenate(string) {
  return string.replace(_uppercasePattern, "-$1").toLowerCase();
}
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}
var hyphenateStyleName_1 = hyphenateStyleName;
var objToCss = function objToCss2(obj, prevKey) {
  var css2 = Object.keys(obj).map(function(key) {
    if (lodash_isplainobject(obj[key])) return objToCss2(obj[key], key);
    return "".concat(hyphenateStyleName_1(key), ": ").concat(obj[key], ";");
  }).join(" ");
  return prevKey ? "".concat(prevKey, " {\n  ").concat(css2, "\n}") : css2;
};
var flatten = function flatten2(chunks, executionContext) {
  return chunks.reduce(function(ruleSet, chunk) {
    if (chunk === void 0 || chunk === null || chunk === false || chunk === "") return ruleSet;
    if (Array.isArray(chunk)) return [].concat(_toConsumableArray(ruleSet), _toConsumableArray(flatten2(chunk, executionContext)));
    if (typeof chunk === "function") {
      return executionContext ? ruleSet.concat.apply(ruleSet, _toConsumableArray(flatten2([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
    }
    return ruleSet.concat(lodash_isplainobject(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};
var css = function(rules) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }
  return flatten(interleave(rules, interpolations));
};
function last(arr) {
  return arr[arr.length - 1];
}
function sheetForTag(tag) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
var isDev = /* @__PURE__ */ function(x) {
  return x === "development" || !x;
}("development");
var isTest = false;
var isBrowser = typeof document !== "undefined" && !isTest;
var oldIE = function() {
  if (isBrowser) {
    var div = document.createElement("div");
    div.innerHTML = "<!--[if lt IE 10]><i></i><![endif]-->";
    return div.getElementsByTagName("i").length === 1;
  }
}();
function makeStyleTag() {
  var tag = document.createElement("style");
  tag.type = "text/css";
  tag.appendChild(document.createTextNode(""));
  (document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
  return tag;
}
var StyleSheet = function() {
  function StyleSheet2() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$speedy = _ref.speedy, speedy = _ref$speedy === void 0 ? !isDev && !isTest : _ref$speedy, _ref$maxLength = _ref.maxLength, maxLength = _ref$maxLength === void 0 ? isBrowser && oldIE ? 4e3 : 65e3 : _ref$maxLength;
    _classCallCheck(this, StyleSheet2);
    this.isSpeedy = speedy;
    this.sheet = void 0;
    this.tags = [];
    this.maxLength = maxLength;
    this.ctr = 0;
  }
  _createClass(StyleSheet2, [{
    key: "inject",
    value: function inject2() {
      var _this = this;
      if (this.injected) {
        throw new Error("already injected stylesheet!");
      }
      if (isBrowser) {
        this.tags[0] = makeStyleTag();
        this.sheet = sheetForTag(this.tags[0]);
      } else {
        this.sheet = {
          cssRules: [],
          insertRule: function insertRule(rule) {
            var serverRule = {
              cssText: rule
            };
            _this.sheet.cssRules.push(serverRule);
            return {
              serverRule,
              appendRule: function appendRule(newCss) {
                return serverRule.cssText += newCss;
              }
            };
          }
        };
      }
      this.injected = true;
    }
  }, {
    key: "speedy",
    value: function speedy(bool) {
      if (this.ctr !== 0) {
        throw new Error("cannot change speedy mode after inserting any rule to sheet. Either call speedy(".concat(bool, ") earlier in your app, or call flush() before speedy(").concat(bool, ")"));
      }
      this.isSpeedy = !!bool;
    }
  }, {
    key: "_insert",
    value: function _insert(rule) {
      try {
        this.sheet.insertRule(rule, this.sheet.cssRules.length);
      } catch (e) {
        if (isDev) {
          console.warn("whoops, illegal rule inserted", rule);
        }
      }
    }
  }, {
    key: "insert",
    value: function insert(rule) {
      var insertedRule;
      if (isBrowser) {
        if (this.isSpeedy && this.sheet.insertRule) {
          this._insert(rule);
        } else {
          var textNode = document.createTextNode(rule);
          last(this.tags).appendChild(textNode);
          insertedRule = {
            textNode,
            appendRule: function appendRule(newCss) {
              return textNode.appendData(newCss);
            }
          };
          if (!this.isSpeedy) {
            this.sheet = sheetForTag(last(this.tags));
          }
        }
      } else {
        insertedRule = this.sheet.insertRule(rule);
      }
      this.ctr++;
      if (isBrowser && this.ctr % this.maxLength === 0) {
        this.tags.push(makeStyleTag());
        this.sheet = sheetForTag(last(this.tags));
      }
      return insertedRule;
    }
  }, {
    key: "flush",
    value: function flush() {
      if (isBrowser) {
        this.tags.forEach(function(tag) {
          return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.sheet = null;
        this.ctr = 0;
      } else {
        this.sheet.cssRules = [];
      }
      this.injected = false;
    }
  }, {
    key: "rules",
    value: function rules() {
      if (!isBrowser) {
        return this.sheet.cssRules;
      }
      var arr = [];
      this.tags.forEach(function(tag) {
        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
      });
      return arr;
    }
  }]);
  return StyleSheet2;
}();
var StyleSheet$1 = function() {
  function StyleSheet$12() {
    _classCallCheck(this, StyleSheet$12);
    this.globalStyleSheet = new StyleSheet({
      speedy: false
    });
    this.componentStyleSheet = new StyleSheet({
      speedy: false,
      maxLength: 40
    });
  }
  _createClass(StyleSheet$12, [{
    key: "inject",
    value: function inject2() {
      this.globalStyleSheet.inject();
      this.componentStyleSheet.inject();
    }
  }, {
    key: "flush",
    value: function flush() {
      if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
      if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
    }
  }, {
    key: "insert",
    value: function insert(rule) {
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        global: false
      };
      var sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet;
      return sheet.insert(rule);
    }
  }, {
    key: "rules",
    value: function rules() {
      return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules());
    }
  }, {
    key: "injected",
    get: function get() {
      return this.globalStyleSheet.injected && this.componentStyleSheet.injected;
    }
  }]);
  return StyleSheet$12;
}();
var styleSheet = new StyleSheet$1();
function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var hash = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = doHash;
  function doHash(str, seed) {
    var m = 1540483477;
    var r = 24;
    var h2 = seed ^ str.length;
    var length = str.length;
    var currentIndex = 0;
    while (length >= 4) {
      var k = UInt32(str, currentIndex);
      k = Umul32(k, m);
      k ^= k >>> r;
      k = Umul32(k, m);
      h2 = Umul32(h2, m);
      h2 ^= k;
      currentIndex += 4;
      length -= 4;
    }
    switch (length) {
      case 3:
        h2 ^= UInt16(str, currentIndex);
        h2 ^= str.charCodeAt(currentIndex + 2) << 16;
        h2 = Umul32(h2, m);
        break;
      case 2:
        h2 ^= UInt16(str, currentIndex);
        h2 = Umul32(h2, m);
        break;
      case 1:
        h2 ^= str.charCodeAt(currentIndex);
        h2 = Umul32(h2, m);
        break;
    }
    h2 ^= h2 >>> 13;
    h2 = Umul32(h2, m);
    h2 ^= h2 >>> 15;
    return h2 >>> 0;
  }
  function UInt32(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
  }
  function UInt16(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
  }
  function Umul32(n, m) {
    n = n | 0;
    m = m | 0;
    var nlo = n & 65535;
    var nhi = n >>> 16;
    var res = nlo * m + ((nhi * m & 65535) << 16) | 0;
    return res;
  }
});
var hashStr = unwrapExports(hash);
var replaceWhitespace = function replaceWhitespace2(str) {
  return str.replace(/\s|\\n/g, "");
};
var makeAnimation = function makeAnimation2(name, css2) {
  return "\n@keyframes ".concat(name, " {\n   ").concat(css2, "\n}\n");
};
var keyframes = function(css2) {
  var name = generateAlphabeticName(hashStr(replaceWhitespace(JSON.stringify(css2))));
  var animation = makeAnimation(name, css2);
  if (!styleSheet.injected) styleSheet.inject();
  styleSheet.insert(animation);
  return name;
};
var stylis = createCommonjsModule(function(module, exports) {
  (function(factory) {
    module["exports"] = factory(null);
  })(
    /** @param {*=} options */
    function factory(options) {
      var nullptn = /^\0+/g;
      var formatptn = /[\0\r\f]/g;
      var colonptn = /: */g;
      var cursorptn = /zoo|gra/;
      var transformptn = /([,: ])(transform)/g;
      var animationptn = /,+\s*(?![^(]*[)])/g;
      var propertiesptn = / +\s*(?![^(]*[)])/g;
      var elementptn = / *[\0] */g;
      var selectorptn = /,\r+?/g;
      var andptn = /([\t\r\n ])*\f?&/g;
      var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
      var invalidptn = /\W+/g;
      var keyframeptn = /@(k\w+)\s*(\S*)\s*/;
      var plcholdrptn = /::(place)/g;
      var readonlyptn = /:(read-only)/g;
      var beforeptn = /\s+(?=[{\];=:>])/g;
      var afterptn = /([[}=:>])\s+/g;
      var tailptn = /(\{[^{]+?);(?=\})/g;
      var whiteptn = /\s{2,}/g;
      var pseudoptn = /([^\(])(:+) */g;
      var writingptn = /[svh]\w+-[tblr]{2}/;
      var supportsptn = /\(\s*(.*)\s*\)/g;
      var propertyptn = /([\s\S]*?);/g;
      var selfptn = /-self|flex-/g;
      var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
      var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/;
      var imgsrcptn = /([^-])(image-set\()/;
      var webkit = "-webkit-";
      var moz = "-moz-";
      var ms = "-ms-";
      var SEMICOLON = 59;
      var CLOSEBRACES = 125;
      var OPENBRACES = 123;
      var OPENPARENTHESES = 40;
      var CLOSEPARENTHESES = 41;
      var OPENBRACKET = 91;
      var CLOSEBRACKET = 93;
      var NEWLINE = 10;
      var CARRIAGE = 13;
      var TAB = 9;
      var AT = 64;
      var SPACE = 32;
      var AND = 38;
      var DASH = 45;
      var UNDERSCORE = 95;
      var STAR = 42;
      var COMMA = 44;
      var COLON = 58;
      var SINGLEQUOTE = 39;
      var DOUBLEQUOTE = 34;
      var FOWARDSLASH = 47;
      var GREATERTHAN = 62;
      var PLUS = 43;
      var TILDE = 126;
      var NULL = 0;
      var FORMFEED = 12;
      var VERTICALTAB = 11;
      var KEYFRAME = 107;
      var MEDIA = 109;
      var SUPPORTS = 115;
      var PLACEHOLDER = 112;
      var READONLY = 111;
      var IMPORT = 105;
      var CHARSET = 99;
      var DOCUMENT = 100;
      var PAGE = 112;
      var column = 1;
      var line = 1;
      var pattern = 0;
      var cascade = 1;
      var prefix = 1;
      var escape = 1;
      var compress = 0;
      var semicolon = 0;
      var preserve = 0;
      var array = [];
      var plugins = [];
      var plugged = 0;
      var should = null;
      var POSTS = -2;
      var PREPS = -1;
      var UNKWN = 0;
      var PROPS = 1;
      var BLCKS = 2;
      var ATRUL = 3;
      var unkwn = 0;
      var keyed = 1;
      var key = "";
      var nscopealt = "";
      var nscope = "";
      function compile(parent, current, body, id, depth) {
        var bracket = 0;
        var comment = 0;
        var parentheses = 0;
        var quote = 0;
        var first = 0;
        var second = 0;
        var code = 0;
        var tail = 0;
        var trail = 0;
        var peak = 0;
        var counter = 0;
        var context = 0;
        var atrule = 0;
        var pseudo = 0;
        var caret = 0;
        var format = 0;
        var insert = 0;
        var invert = 0;
        var length = 0;
        var eof = body.length;
        var eol = eof - 1;
        var char = "";
        var chars2 = "";
        var child = "";
        var out = "";
        var children = "";
        var flat = "";
        var selector;
        var result;
        while (caret < eof) {
          code = body.charCodeAt(caret);
          if (caret === eol) {
            if (comment + quote + parentheses + bracket !== 0) {
              if (comment !== 0) {
                code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
              }
              quote = parentheses = bracket = 0;
              eof++;
              eol++;
            }
          }
          if (comment + quote + parentheses + bracket === 0) {
            if (caret === eol) {
              if (format > 0) {
                chars2 = chars2.replace(formatptn, "");
              }
              if (chars2.trim().length > 0) {
                switch (code) {
                  case SPACE:
                  case TAB:
                  case SEMICOLON:
                  case CARRIAGE:
                  case NEWLINE: {
                    break;
                  }
                  default: {
                    chars2 += body.charAt(caret);
                  }
                }
                code = SEMICOLON;
              }
            }
            if (insert === 1) {
              switch (code) {
                case OPENBRACES:
                case CLOSEBRACES:
                case SEMICOLON:
                case DOUBLEQUOTE:
                case SINGLEQUOTE:
                case OPENPARENTHESES:
                case CLOSEPARENTHESES:
                case COMMA: {
                  insert = 0;
                }
                case TAB:
                case CARRIAGE:
                case NEWLINE:
                case SPACE: {
                  break;
                }
                default: {
                  insert = 0;
                  length = caret;
                  first = code;
                  caret--;
                  code = SEMICOLON;
                  while (length < eof) {
                    switch (body.charCodeAt(length++)) {
                      case NEWLINE:
                      case CARRIAGE:
                      case SEMICOLON: {
                        ++caret;
                        code = first;
                        length = eof;
                        break;
                      }
                      case COLON: {
                        if (format > 0) {
                          ++caret;
                          code = first;
                        }
                      }
                      case OPENBRACES: {
                        length = eof;
                      }
                    }
                  }
                }
              }
            }
            switch (code) {
              case OPENBRACES: {
                chars2 = chars2.trim();
                first = chars2.charCodeAt(0);
                counter = 1;
                length = ++caret;
                while (caret < eof) {
                  switch (code = body.charCodeAt(caret)) {
                    case OPENBRACES: {
                      counter++;
                      break;
                    }
                    case CLOSEBRACES: {
                      counter--;
                      break;
                    }
                    case FOWARDSLASH: {
                      switch (second = body.charCodeAt(caret + 1)) {
                        case STAR:
                        case FOWARDSLASH: {
                          caret = delimited(second, caret, eol, body);
                        }
                      }
                      break;
                    }
                    case OPENBRACKET: {
                      code++;
                    }
                    case OPENPARENTHESES: {
                      code++;
                    }
                    case DOUBLEQUOTE:
                    case SINGLEQUOTE: {
                      while (caret++ < eol) {
                        if (body.charCodeAt(caret) === code) {
                          break;
                        }
                      }
                    }
                  }
                  if (counter === 0) {
                    break;
                  }
                  caret++;
                }
                child = body.substring(length, caret);
                if (first === NULL) {
                  first = (chars2 = chars2.replace(nullptn, "").trim()).charCodeAt(0);
                }
                switch (first) {
                  case AT: {
                    if (format > 0) {
                      chars2 = chars2.replace(formatptn, "");
                    }
                    second = chars2.charCodeAt(1);
                    switch (second) {
                      case DOCUMENT:
                      case MEDIA:
                      case SUPPORTS:
                      case DASH: {
                        selector = current;
                        break;
                      }
                      default: {
                        selector = array;
                      }
                    }
                    child = compile(current, selector, child, second, depth + 1);
                    length = child.length;
                    if (preserve > 0 && length === 0) {
                      length = chars2.length;
                    }
                    if (plugged > 0) {
                      selector = select(array, chars2, invert);
                      result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
                      chars2 = selector.join("");
                      if (result !== void 0) {
                        if ((length = (child = result.trim()).length) === 0) {
                          second = 0;
                          child = "";
                        }
                      }
                    }
                    if (length > 0) {
                      switch (second) {
                        case SUPPORTS: {
                          chars2 = chars2.replace(supportsptn, supports);
                        }
                        case DOCUMENT:
                        case MEDIA:
                        case DASH: {
                          child = chars2 + "{" + child + "}";
                          break;
                        }
                        case KEYFRAME: {
                          chars2 = chars2.replace(keyframeptn, "$1 $2" + (keyed > 0 ? key : ""));
                          child = chars2 + "{" + child + "}";
                          if (prefix === 1 || prefix === 2 && vendor("@" + child, 3)) {
                            child = "@" + webkit + child + "@" + child;
                          } else {
                            child = "@" + child;
                          }
                          break;
                        }
                        default: {
                          child = chars2 + child;
                          if (id === PAGE) {
                            child = (out += child, "");
                          }
                        }
                      }
                    } else {
                      child = "";
                    }
                    break;
                  }
                  default: {
                    child = compile(current, select(current, chars2, invert), child, id, depth + 1);
                  }
                }
                children += child;
                context = 0;
                insert = 0;
                pseudo = 0;
                format = 0;
                invert = 0;
                atrule = 0;
                chars2 = "";
                child = "";
                code = body.charCodeAt(++caret);
                break;
              }
              case CLOSEBRACES:
              case SEMICOLON: {
                chars2 = (format > 0 ? chars2.replace(formatptn, "") : chars2).trim();
                if ((length = chars2.length) > 1) {
                  if (pseudo === 0) {
                    first = chars2.charCodeAt(0);
                    if (first === DASH || first > 96 && first < 123) {
                      length = (chars2 = chars2.replace(" ", ":")).length;
                    }
                  }
                  if (plugged > 0) {
                    if ((result = proxy(PROPS, chars2, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
                      if ((length = (chars2 = result.trim()).length) === 0) {
                        chars2 = "\0\0";
                      }
                    }
                  }
                  first = chars2.charCodeAt(0);
                  second = chars2.charCodeAt(1);
                  switch (first) {
                    case NULL: {
                      break;
                    }
                    case AT: {
                      if (second === IMPORT || second === CHARSET) {
                        flat += chars2 + body.charAt(caret);
                        break;
                      }
                    }
                    default: {
                      if (chars2.charCodeAt(length - 1) === COLON) {
                        break;
                      }
                      out += property(chars2, first, second, chars2.charCodeAt(2));
                    }
                  }
                }
                context = 0;
                insert = 0;
                pseudo = 0;
                format = 0;
                invert = 0;
                chars2 = "";
                code = body.charCodeAt(++caret);
                break;
              }
            }
          }
          switch (code) {
            case CARRIAGE:
            case NEWLINE: {
              if (comment + quote + parentheses + bracket + semicolon === 0) {
                switch (peak) {
                  case CLOSEPARENTHESES:
                  case SINGLEQUOTE:
                  case DOUBLEQUOTE:
                  case AT:
                  case TILDE:
                  case GREATERTHAN:
                  case STAR:
                  case PLUS:
                  case FOWARDSLASH:
                  case DASH:
                  case COLON:
                  case COMMA:
                  case SEMICOLON:
                  case OPENBRACES:
                  case CLOSEBRACES: {
                    break;
                  }
                  default: {
                    if (pseudo > 0) {
                      insert = 1;
                    }
                  }
                }
              }
              if (comment === FOWARDSLASH) {
                comment = 0;
              } else if (cascade + context === 0 && id !== KEYFRAME && chars2.length > 0) {
                format = 1;
                chars2 += "\0";
              }
              if (plugged * unkwn > 0) {
                proxy(UNKWN, chars2, current, parent, line, column, out.length, id, depth, id);
              }
              column = 1;
              line++;
              break;
            }
            case SEMICOLON:
            case CLOSEBRACES: {
              if (comment + quote + parentheses + bracket === 0) {
                column++;
                break;
              }
            }
            default: {
              column++;
              char = body.charAt(caret);
              switch (code) {
                case TAB:
                case SPACE: {
                  if (quote + bracket + comment === 0) {
                    switch (tail) {
                      case COMMA:
                      case COLON:
                      case TAB:
                      case SPACE: {
                        char = "";
                        break;
                      }
                      default: {
                        if (code !== SPACE) {
                          char = " ";
                        }
                      }
                    }
                  }
                  break;
                }
                case NULL: {
                  char = "\\0";
                  break;
                }
                case FORMFEED: {
                  char = "\\f";
                  break;
                }
                case VERTICALTAB: {
                  char = "\\v";
                  break;
                }
                case AND: {
                  if (quote + comment + bracket === 0 && cascade > 0) {
                    invert = 1;
                    format = 1;
                    char = "\f" + char;
                  }
                  break;
                }
                case 108: {
                  if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
                    switch (caret - pseudo) {
                      case 2: {
                        if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
                          pattern = tail;
                        }
                      }
                      case 8: {
                        if (trail === READONLY) {
                          pattern = trail;
                        }
                      }
                    }
                  }
                  break;
                }
                case COLON: {
                  if (quote + comment + bracket === 0) {
                    pseudo = caret;
                  }
                  break;
                }
                case COMMA: {
                  if (comment + parentheses + quote + bracket === 0) {
                    format = 1;
                    char += "\r";
                  }
                  break;
                }
                case DOUBLEQUOTE:
                case SINGLEQUOTE: {
                  if (comment === 0) {
                    quote = quote === code ? 0 : quote === 0 ? code : quote;
                  }
                  break;
                }
                case OPENBRACKET: {
                  if (quote + comment + parentheses === 0) {
                    bracket++;
                  }
                  break;
                }
                case CLOSEBRACKET: {
                  if (quote + comment + parentheses === 0) {
                    bracket--;
                  }
                  break;
                }
                case CLOSEPARENTHESES: {
                  if (quote + comment + bracket === 0) {
                    parentheses--;
                  }
                  break;
                }
                case OPENPARENTHESES: {
                  if (quote + comment + bracket === 0) {
                    if (context === 0) {
                      switch (tail * 2 + trail * 3) {
                        case 533: {
                          break;
                        }
                        default: {
                          counter = 0;
                          context = 1;
                        }
                      }
                    }
                    parentheses++;
                  }
                  break;
                }
                case AT: {
                  if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
                    atrule = 1;
                  }
                  break;
                }
                case STAR:
                case FOWARDSLASH: {
                  if (quote + bracket + parentheses > 0) {
                    break;
                  }
                  switch (comment) {
                    case 0: {
                      switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                        case 235: {
                          comment = FOWARDSLASH;
                          break;
                        }
                        case 220: {
                          length = caret;
                          comment = STAR;
                          break;
                        }
                      }
                      break;
                    }
                    case STAR: {
                      if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
                        if (body.charCodeAt(length + 2) === 33) {
                          out += body.substring(length, caret + 1);
                        }
                        char = "";
                        comment = 0;
                      }
                    }
                  }
                }
              }
              if (comment === 0) {
                if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
                  switch (code) {
                    case COMMA:
                    case TILDE:
                    case GREATERTHAN:
                    case PLUS:
                    case CLOSEPARENTHESES:
                    case OPENPARENTHESES: {
                      if (context === 0) {
                        switch (tail) {
                          case TAB:
                          case SPACE:
                          case NEWLINE:
                          case CARRIAGE: {
                            char = char + "\0";
                            break;
                          }
                          default: {
                            char = "\0" + char + (code === COMMA ? "" : "\0");
                          }
                        }
                        format = 1;
                      } else {
                        switch (code) {
                          case OPENPARENTHESES: {
                            if (pseudo + 7 === caret && tail === 108) {
                              pseudo = 0;
                            }
                            context = ++counter;
                            break;
                          }
                          case CLOSEPARENTHESES: {
                            if ((context = --counter) === 0) {
                              format = 1;
                              char += "\0";
                            }
                            break;
                          }
                        }
                      }
                      break;
                    }
                    case TAB:
                    case SPACE: {
                      switch (tail) {
                        case NULL:
                        case OPENBRACES:
                        case CLOSEBRACES:
                        case SEMICOLON:
                        case COMMA:
                        case FORMFEED:
                        case TAB:
                        case SPACE:
                        case NEWLINE:
                        case CARRIAGE: {
                          break;
                        }
                        default: {
                          if (context === 0) {
                            format = 1;
                            char += "\0";
                          }
                        }
                      }
                    }
                  }
                }
                chars2 += char;
                if (code !== SPACE && code !== TAB) {
                  peak = code;
                }
              }
            }
          }
          trail = tail;
          tail = code;
          caret++;
        }
        length = out.length;
        if (preserve > 0) {
          if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
            if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
              length = current.join(",").length + 2;
            }
          }
        }
        if (length > 0) {
          selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current;
          if (plugged > 0) {
            result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);
            if (result !== void 0 && (out = result).length === 0) {
              return flat + out + children;
            }
          }
          out = selector.join(",") + "{" + out + "}";
          if (prefix * pattern !== 0) {
            if (prefix === 2 && !vendor(out, 2)) pattern = 0;
            switch (pattern) {
              case READONLY: {
                out = out.replace(readonlyptn, ":" + moz + "$1") + out;
                break;
              }
              case PLACEHOLDER: {
                out = out.replace(plcholdrptn, "::" + webkit + "input-$1") + out.replace(plcholdrptn, "::" + moz + "$1") + out.replace(plcholdrptn, ":" + ms + "input-$1") + out;
                break;
              }
            }
            pattern = 0;
          }
        }
        return flat + out + children;
      }
      function select(parent, current, invert) {
        var selectors = current.trim().split(selectorptn);
        var out = selectors;
        var length = selectors.length;
        var l = parent.length;
        switch (l) {
          case 0:
          case 1: {
            for (var i = 0, selector = l === 0 ? "" : parent[0] + " "; i < length; ++i) {
              out[i] = scope(selector, out[i], invert, l).trim();
            }
            break;
          }
          default: {
            for (var i = 0, j = 0, out = []; i < length; ++i) {
              for (var k = 0; k < l; ++k) {
                out[j++] = scope(parent[k] + " ", selectors[i], invert, l).trim();
              }
            }
          }
        }
        return out;
      }
      function scope(parent, current, invert, level) {
        var selector = current;
        var code = selector.charCodeAt(0);
        if (code < 33) {
          code = (selector = selector.trim()).charCodeAt(0);
        }
        switch (code) {
          case AND: {
            switch (cascade + level) {
              case 0:
              case 1: {
                if (parent.trim().length === 0) {
                  break;
                }
              }
              default: {
                return selector.replace(andptn, "$1" + parent.trim());
              }
            }
            break;
          }
          case COLON: {
            switch (selector.charCodeAt(1)) {
              case 103: {
                if (escape > 0 && cascade > 0) {
                  return selector.replace(escapeptn, "$1").replace(andptn, "$1" + nscope);
                }
                break;
              }
              default: {
                return parent.trim() + selector.replace(andptn, "$1" + parent.trim());
              }
            }
          }
          default: {
            if (invert * cascade > 0 && selector.indexOf("\f") > 0) {
              return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? "" : "$1") + parent.trim());
            }
          }
        }
        return parent + selector;
      }
      function property(input, first, second, third) {
        var index = 0;
        var out = input + ";";
        var hash2 = first * 2 + second * 3 + third * 4;
        var cache;
        if (hash2 === 944) {
          return animation(out);
        } else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
          return out;
        }
        switch (hash2) {
          case 1015: {
            return out.charCodeAt(10) === 97 ? webkit + out + out : out;
          }
          case 951: {
            return out.charCodeAt(3) === 116 ? webkit + out + out : out;
          }
          case 963: {
            return out.charCodeAt(5) === 110 ? webkit + out + out : out;
          }
          case 1009: {
            if (out.charCodeAt(4) !== 100) {
              break;
            }
          }
          case 969:
          case 942: {
            return webkit + out + out;
          }
          case 978: {
            return webkit + out + moz + out + out;
          }
          case 1019:
          case 983: {
            return webkit + out + moz + out + ms + out + out;
          }
          case 883: {
            if (out.charCodeAt(8) === DASH) {
              return webkit + out + out;
            }
            if (out.indexOf("image-set(", 11) > 0) {
              return out.replace(imgsrcptn, "$1" + webkit + "$2") + out;
            }
            return out;
          }
          case 932: {
            if (out.charCodeAt(4) === DASH) {
              switch (out.charCodeAt(5)) {
                case 103: {
                  return webkit + "box-" + out.replace("-grow", "") + webkit + out + ms + out.replace("grow", "positive") + out;
                }
                case 115: {
                  return webkit + out + ms + out.replace("shrink", "negative") + out;
                }
                case 98: {
                  return webkit + out + ms + out.replace("basis", "preferred-size") + out;
                }
              }
            }
            return webkit + out + ms + out + out;
          }
          case 964: {
            return webkit + out + ms + "flex-" + out + out;
          }
          case 1023: {
            if (out.charCodeAt(8) !== 99) {
              break;
            }
            cache = out.substring(out.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
            return webkit + "box-pack" + cache + webkit + out + ms + "flex-pack" + cache + out;
          }
          case 1005: {
            return cursorptn.test(out) ? out.replace(colonptn, ":" + webkit) + out.replace(colonptn, ":" + moz) + out : out;
          }
          case 1e3: {
            cache = out.substring(13).trim();
            index = cache.indexOf("-") + 1;
            switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
              case 226: {
                cache = out.replace(writingptn, "tb");
                break;
              }
              case 232: {
                cache = out.replace(writingptn, "tb-rl");
                break;
              }
              case 220: {
                cache = out.replace(writingptn, "lr");
                break;
              }
              default: {
                return out;
              }
            }
            return webkit + out + ms + cache + out;
          }
          case 1017: {
            if (out.indexOf("sticky", 9) === -1) {
              return out;
            }
          }
          case 975: {
            index = (out = input).length - 10;
            cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(":", 7) + 1).trim();
            switch (hash2 = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
              case 203: {
                if (cache.charCodeAt(8) < 111) {
                  break;
                }
              }
              case 115: {
                out = out.replace(cache, webkit + cache) + ";" + out;
                break;
              }
              case 207:
              case 102: {
                out = out.replace(cache, webkit + (hash2 > 102 ? "inline-" : "") + "box") + ";" + out.replace(cache, webkit + cache) + ";" + out.replace(cache, ms + cache + "box") + ";" + out;
              }
            }
            return out + ";";
          }
          case 938: {
            if (out.charCodeAt(5) === DASH) {
              switch (out.charCodeAt(6)) {
                case 105: {
                  cache = out.replace("-items", "");
                  return webkit + out + webkit + "box-" + cache + ms + "flex-" + cache + out;
                }
                case 115: {
                  return webkit + out + ms + "flex-item-" + out.replace(selfptn, "") + out;
                }
                default: {
                  return webkit + out + ms + "flex-line-pack" + out.replace("align-content", "").replace(selfptn, "") + out;
                }
              }
            }
            break;
          }
          case 973:
          case 989: {
            if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
              break;
            }
          }
          case 931:
          case 953: {
            if (dimensionptn.test(input) === true) {
              if ((cache = input.substring(input.indexOf(":") + 1)).charCodeAt(0) === 115) return property(input.replace("stretch", "fill-available"), first, second, third).replace(":fill-available", ":stretch");
              else return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace("fill-", "")) + out;
            }
            break;
          }
          case 962: {
            out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : "") + out;
            if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf("transform", 10) > 0) {
              return out.substring(0, out.indexOf(";", 27) + 1).replace(transformptn, "$1" + webkit + "$2") + out;
            }
            break;
          }
        }
        return out;
      }
      function vendor(content, context) {
        var index = content.indexOf(context === 1 ? ":" : "{");
        var key2 = content.substring(0, context !== 3 ? index : 10);
        var value = content.substring(index + 1, content.length - 1);
        return should(context !== 2 ? key2 : key2.replace(pseudofmt, "$1"), value, context);
      }
      function supports(match, group) {
        var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));
        return out !== group + ";" ? out.replace(propertyptn, " or ($1)").substring(4) : "(" + group + ")";
      }
      function animation(input) {
        var length = input.length;
        var index = input.indexOf(":", 9) + 1;
        var declare = input.substring(0, index).trim();
        var out = input.substring(index, length - 1).trim();
        switch (input.charCodeAt(9) * keyed) {
          case 0: {
            break;
          }
          case DASH: {
            if (input.charCodeAt(10) !== 110) {
              break;
            }
          }
          default: {
            var list = out.split((out = "", animationptn));
            for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
              var value = list[i];
              var items = value.split(propertiesptn);
              while (value = items[index]) {
                var peak = value.charCodeAt(0);
                if (keyed === 1 && // letters
                (peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE || // dash but not in sequence i.e --
                peak === DASH && value.charCodeAt(1) !== DASH)) {
                  switch (isNaN(parseFloat(value)) + (value.indexOf("(") !== -1)) {
                    case 1: {
                      switch (value) {
                        case "infinite":
                        case "alternate":
                        case "backwards":
                        case "running":
                        case "normal":
                        case "forwards":
                        case "both":
                        case "none":
                        case "linear":
                        case "ease":
                        case "ease-in":
                        case "ease-out":
                        case "ease-in-out":
                        case "paused":
                        case "reverse":
                        case "alternate-reverse":
                        case "inherit":
                        case "initial":
                        case "unset":
                        case "step-start":
                        case "step-end": {
                          break;
                        }
                        default: {
                          value += key;
                        }
                      }
                    }
                  }
                }
                items[index++] = value;
              }
              out += (i === 0 ? "" : ",") + items.join(" ");
            }
          }
        }
        out = declare + out + ";";
        if (prefix === 1 || prefix === 2 && vendor(out, 1)) return webkit + out + out;
        return out;
      }
      function isolate(current) {
        for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
          var elements = current[i].split(elementptn);
          var out = "";
          for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
            if ((size = (element = elements[j]).length) === 0 && l > 1) {
              continue;
            }
            tail = out.charCodeAt(out.length - 1);
            code = element.charCodeAt(0);
            padding = "";
            if (j !== 0) {
              switch (tail) {
                case STAR:
                case TILDE:
                case GREATERTHAN:
                case PLUS:
                case SPACE:
                case OPENPARENTHESES: {
                  break;
                }
                default: {
                  padding = " ";
                }
              }
            }
            switch (code) {
              case AND: {
                element = padding + nscopealt;
              }
              case TILDE:
              case GREATERTHAN:
              case PLUS:
              case SPACE:
              case CLOSEPARENTHESES:
              case OPENPARENTHESES: {
                break;
              }
              case OPENBRACKET: {
                element = padding + element + nscopealt;
                break;
              }
              case COLON: {
                switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
                  case 530: {
                    if (escape > 0) {
                      element = padding + element.substring(8, size - 1);
                      break;
                    }
                  }
                  default: {
                    if (j < 1 || elements[j - 1].length < 1) {
                      element = padding + nscopealt + element;
                    }
                  }
                }
                break;
              }
              case COMMA: {
                padding = "";
              }
              default: {
                if (size > 1 && element.indexOf(":") > 0) {
                  element = padding + element.replace(pseudoptn, "$1" + nscopealt + "$2");
                } else {
                  element = padding + element + nscopealt;
                }
              }
            }
            out += element;
          }
          selector[i] = out.replace(formatptn, "").trim();
        }
        return selector;
      }
      function proxy(context, content, selectors, parents, line2, column2, length, id, depth, at) {
        for (var i = 0, out = content, next; i < plugged; ++i) {
          switch (next = plugins[i].call(stylis2, context, out, selectors, parents, line2, column2, length, id, depth, at)) {
            case void 0:
            case false:
            case true:
            case null: {
              break;
            }
            default: {
              out = next;
            }
          }
        }
        if (out !== content) {
          return out;
        }
      }
      function delimited(code, index, length, body) {
        for (var i = index + 1; i < length; ++i) {
          switch (body.charCodeAt(i)) {
            case FOWARDSLASH: {
              if (code === STAR) {
                if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
                  return i + 1;
                }
              }
              break;
            }
            case NEWLINE: {
              if (code === FOWARDSLASH) {
                return i + 1;
              }
            }
          }
        }
        return i;
      }
      function minify(output) {
        return output.replace(formatptn, "").replace(beforeptn, "").replace(afterptn, "$1").replace(tailptn, "$1").replace(whiteptn, " ");
      }
      function use(plugin) {
        switch (plugin) {
          case void 0:
          case null: {
            plugged = plugins.length = 0;
            break;
          }
          default: {
            if (typeof plugin === "function") {
              plugins[plugged++] = plugin;
            } else if (typeof plugin === "object") {
              for (var i = 0, length = plugin.length; i < length; ++i) {
                use(plugin[i]);
              }
            } else {
              unkwn = !!plugin | 0;
            }
          }
        }
        return use;
      }
      function set(options2) {
        for (var name in options2) {
          var value = options2[name];
          switch (name) {
            case "keyframe":
              keyed = value | 0;
              break;
            case "global":
              escape = value | 0;
              break;
            case "cascade":
              cascade = value | 0;
              break;
            case "compress":
              compress = value | 0;
              break;
            case "semicolon":
              semicolon = value | 0;
              break;
            case "preserve":
              preserve = value | 0;
              break;
            case "prefix":
              should = null;
              if (!value) {
                prefix = 0;
              } else if (typeof value !== "function") {
                prefix = 1;
              } else {
                prefix = 2;
                should = value;
              }
          }
        }
        return set;
      }
      function stylis2(selector, input) {
        if (this !== void 0 && this.constructor === stylis2) {
          return factory(selector);
        }
        var ns = selector;
        var code = ns.charCodeAt(0);
        if (code < 33) {
          code = (ns = ns.trim()).charCodeAt(0);
        }
        if (keyed > 0) {
          key = ns.replace(invalidptn, code === OPENBRACKET ? "" : "-");
        }
        code = 1;
        if (cascade === 1) {
          nscope = ns;
        } else {
          nscopealt = ns;
        }
        var selectors = [nscope];
        var result;
        if (plugged > 0) {
          result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);
          if (result !== void 0 && typeof result === "string") {
            input = result;
          }
        }
        var output = compile(array, selectors, input, 0, 0);
        if (plugged > 0) {
          result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0);
          if (result !== void 0 && typeof (output = result) !== "string") {
            code = 0;
          }
        }
        key = "";
        nscope = "";
        nscopealt = "";
        pattern = 0;
        line = 1;
        column = 1;
        return compress * code === 0 ? output : minify(output);
      }
      stylis2["use"] = use;
      stylis2["set"] = set;
      if (options !== void 0) {
        set(options);
      }
      return stylis2;
    }
  );
});
var ComponentStyle = function() {
  function ComponentStyle2(rules, selector) {
    _classCallCheck(this, ComponentStyle2);
    this.rules = rules;
    this.selector = selector;
  }
  _createClass(ComponentStyle2, [{
    key: "generateAndInject",
    value: function generateAndInject() {
      if (!styleSheet.injected) styleSheet.inject();
      var flatCSS = flatten(this.rules).join("");
      var cssString = this.selector ? "".concat(this.selector, " { ").concat(flatCSS, " }") : flatCSS;
      var css2 = stylis("", cssString, false, false);
      styleSheet.insert(css2, {
        global: true
      });
    }
  }]);
  return ComponentStyle2;
}();
var injectGlobal = function injectGlobal2(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }
  var globalStyle = new ComponentStyle(css.apply(void 0, [strings].concat(interpolations)));
  globalStyle.generateAndInject();
};
var ThemeProvider = {
  props: {
    theme: Object
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    provide("theme", props.theme);
  },
  render: function render() {
    return h("div", {}, this.$slots["default"]());
  }
};
function isVueComponent(target) {
  return target && (typeof target.setup === "function" || typeof target.render === "function" || typeof target.template === "string");
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$1.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    object[key] = value;
  }
}
function baseZipObject(props, values, assignFunc) {
  var index = -1, length = props.length, valsLength = values.length, result = {};
  while (++index < length) {
    var value = index < valsLength ? values[index] : void 0;
    assignFunc(result, props[index], value);
  }
  return result;
}
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var lodash_zipobject = zipObject;
function normalizeProps() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (Array.isArray(props)) {
    return lodash_zipobject(props);
  } else {
    return props;
  }
}
var commonHtmlAttributes = ["value", "name", "type", "id", "href"];
var _styledComponent = function(ComponentStyle2) {
  var createStyledComponent = function createStyledComponent2(tagOrComponent, rules, propDefinitions) {
    var componentStyle = new ComponentStyle2(rules);
    var targetPropDefinitions = normalizeProps(tagOrComponent.props);
    var ownPropDefinitions = normalizeProps(propDefinitions);
    var targetPropDefinitionKeys = tagOrComponent.props ? Object.keys(targetPropDefinitions) : commonHtmlAttributes;
    var combinedPropDefinition = tagOrComponent.props ? _objectSpread2({}, ownPropDefinitions, {}, targetPropDefinitions) : ownPropDefinitions;
    return {
      props: _objectSpread2({
        as: [String, Object],
        modelValue: null
      }, combinedPropDefinition),
      emits: ["input", "update:modelValue"],
      setup: function setup2(props, _ref) {
        var slots = _ref.slots, attrs = _ref.attrs, emit = _ref.emit;
        var theme = inject("theme");
        return function() {
          var styleClass = componentStyle.generateAndInjectStyles(_objectSpread2({
            theme
          }, props, {}, attrs));
          var classes = [styleClass];
          if (attrs["class"]) {
            classes.push(attrs["class"]);
          }
          var targetProps = {};
          if (targetPropDefinitionKeys.length) {
            for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
              if (targetPropDefinitionKeys.includes(key)) {
                targetProps[key] = value;
              }
            }
          }
          return h(isVueComponent(tagOrComponent) ? tagOrComponent : props.as || tagOrComponent, _objectSpread2({
            value: props.modelValue
          }, attrs, {}, targetProps, {
            "class": classes,
            onInput: function onInput(e) {
              emit("update:modelValue", e.target.value);
              emit("input", e);
            }
          }), slots);
        };
      },
      extend: function extend(cssRules) {
        for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          interpolations[_key - 1] = arguments[_key];
        }
        var extendedRules = css.apply(void 0, [cssRules].concat(interpolations));
        return createStyledComponent2(tagOrComponent, rules.concat(extendedRules), propDefinitions);
      },
      withComponent: function withComponent(newTarget) {
        return createStyledComponent2(newTarget, rules, propDefinitions);
      }
    };
  };
  return createStyledComponent;
};
var _componentStyle = function(nameGenerator) {
  var inserted = {};
  var ComponentStyle2 = function() {
    function ComponentStyle3(rules) {
      _classCallCheck(this, ComponentStyle3);
      this.rules = rules;
      stylis.set({
        keyframe: false
      });
      if (!styleSheet.injected) styleSheet.inject();
      this.insertedRule = styleSheet.insert("");
    }
    _createClass(ComponentStyle3, [{
      key: "generateAndInjectStyles",
      value: function generateAndInjectStyles(executionContext) {
        var flatCSS = flatten(this.rules, executionContext).join("").replace(/^\s*\/\/.*$/gm, "");
        var hash2 = hashStr(flatCSS);
        if (!inserted[hash2]) {
          var selector = nameGenerator(hash2);
          inserted[hash2] = selector;
          var css2 = stylis(".".concat(selector), flatCSS);
          this.insertedRule.appendRule(css2);
        }
        return inserted[hash2];
      }
    }]);
    return ComponentStyle3;
  }();
  return ComponentStyle2;
};
var domElements = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
function isTag(target) {
  if (typeof target === "string") {
    return domElements.indexOf(target) !== -1;
  }
}
function isStyledComponent(target) {
  return target && target.methods && typeof target.methods.generateAndInjectStyles === "function";
}
function isValidElementType(target) {
  return isStyledComponent(target) || isVueComponent(target) || isTag(target);
}
var _styled = function(createStyledComponent) {
  var styled2 = function styled3(tagName) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!isValidElementType(tagName)) {
      throw new Error(tagName + " is not allowed for styled tag type.");
    }
    return function(cssRules) {
      for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }
      return createStyledComponent(tagName, css.apply(void 0, [cssRules].concat(interpolations)), props);
    };
  };
  domElements.forEach(function(domElement) {
    styled2[domElement] = styled2(domElement);
  });
  return styled2;
};
var styled = _styled(_styledComponent(_componentStyle(generateAlphabeticName)));
var vue_styled_components_es_default = styled;
export {
  ThemeProvider,
  css,
  vue_styled_components_es_default as default,
  injectGlobal,
  keyframes
};
//# sourceMappingURL=vue3-styled-components.js.map
