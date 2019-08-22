(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Translate"] = factory();
	else
		root["Translate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _emiiter = __webpack_require__(1);

var _emiiter2 = _interopRequireDefault(_emiiter);

var _TranslateAction = __webpack_require__(2);

var _TranslateAction2 = _interopRequireDefault(_TranslateAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnReg = /[a-zA-Z]+$/; // 至少包含英文

var TextTranslate = function (_EventEmiiter) {
  _inherits(TextTranslate, _EventEmiiter);

  // Element = null;
  // Text = '';
  // TranslateAction = null;

  function TextTranslate() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TextTranslate);

    var _this = _possibleConstructorReturn(this, (TextTranslate.__proto__ || Object.getPrototypeOf(TextTranslate)).call(this));

    _this.elbindEvent(el);
    _this.createTranslateModal();
    return _this;
  }

  /**
   * 绑定的dom元素
   * @param {HTMLElement} el 
   */


  _createClass(TextTranslate, [{
    key: 'elbindEvent',
    value: function elbindEvent(el) {
      var _this2 = this;

      if (!el) {
        this.Element = document.body;
        this.Element.addEventListener('mouseup', function (e) {
          return _this2.onMouseUpAction(e);
        });
      } else {
        this.Element = document.querySelector(el);
        this.Element.addEventListener('mouseup', function (e) {
          return _this2.onMouseUpAction(e);
        });
      }
    }

    /**
     * 鼠标抬起获取选中的文字
     * @param {*} e 
     */

  }, {
    key: 'onMouseUpAction',
    value: function onMouseUpAction(e) {
      if (this.Text) {
        this.Text = '';
      }

      this.Text = this.getSelectionText();
      if (!this.Text) {
        this.hideModal();
        return;
      }
      this.setTextFrom();
      this.setContent('翻译中...');
      this.TranslateAction = null;
      // if (!EnReg.test(this.Text)) {
      //   throw '选中的文字必须包含英文';
      // }
      this.TranslateAction = new _TranslateAction2.default({
        text: this.Text,
        target: e,
        emitter: this,
        element: this.Element,
        modal: this.TranslateModal
      });
    }
  }, {
    key: 'getSelectionText',
    value: function getSelectionText() {
      if (document.selection) {
        return document.selection.createRange().text;
      } else {
        return window.getSelection().toString();
      }
    }

    /**
     * 初始化翻译弹窗
     */

  }, {
    key: 'createTranslateModal',
    value: function createTranslateModal() {
      var _this3 = this;

      // this.TranslateModal = document.createElement('div');
      // this.TranslateModal.className = 'translateModal';
      this.TranslateModal = document.querySelector('.translateModal');
      if (!this.TranslateModal) throw '缺少翻译弹窗dom节点,';

      this.TranslateModal.style.opacity = 0;
      this.TranslateModal.style.position = 'absolute';
      this.TranslateModal.addEventListener('mouseup', function (e) {
        return e.stopPropagation();
      });

      this.closeBtn = document.querySelector('#translate-close');
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', function () {
          _this3.hideModal();
        });
      }

      // document.body.appendChild(this.TranslateModal);
    }

    /**
     * 关闭弹窗
     */

  }, {
    key: 'hideModal',
    value: function hideModal() {
      // var clearSlct = "getSelection" in window ? function(){
      //   window.getSelection().removeAllRanges();
      //  } : function(){
      //   document.selection.empty();
      //  };
      this.TranslateModal.style.opacity = 0;
      this.setContent('');
    }

    /**
     * 设置翻译结果到窗口中
     * @param {*String} translateContent 翻译结果 
     */

  }, {
    key: 'setContent',
    value: function setContent(translateContent) {
      var dom = document.querySelector('.translateModal #translate-result');
      if (!dom) throw '缺少显示翻译内容的节点， 节点id为translate-content';

      dom.innerHTML = translateContent;
    }

    /**
     * 设置取词文本到窗口中
     */

  }, {
    key: 'setTextFrom',
    value: function setTextFrom() {
      var dom = document.querySelector('.translateModal #translate-from');
      if (!dom) throw '缺少显示原内容的节点， 节点id为translate-from';
      dom.innerHTML = this.Text;
    }
  }]);

  return TextTranslate;
}(_emiiter2.default);

module.exports = TextTranslate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *  事件处理中心
 *  订阅/发布模式
 */
var EventEmiiter = function () {
  function EventEmiiter() {
    _classCallCheck(this, EventEmiiter);

    this.subs = {};
  }

  // 订阅


  _createClass(EventEmiiter, [{
    key: "on",
    value: function on(event, callback) {
      if (!this.subs[event]) {
        this.subs[event] = [];
        this.subs[event].push(callback);
      }
    }

    // 发布

  }, {
    key: "trigger",
    value: function trigger(event, options) {
      if (this.subs[event]) {
        this.subs[event].forEach(function (cb) {
          cb(options);
        });
      }
    }

    // 订阅一次

  }, {
    key: "once",
    value: function once(event, onceCb) {
      var _this = this;

      var cb = function cb() {
        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }

        var res = onceCb.apply(null, rest);
        _this.off(event, onceCb);
        return res;
      };

      if (!this.subs[event]) {
        this.subs[event] = [];
        this.subs[event].push(cb);
      }
    }

    // 取消订阅

  }, {
    key: "off",
    value: function off(event, offCb) {
      if (!this.subs[event]) {
        var index = this.subs[event].findIndex(function (cb) {
          return cb === offCb;
        });
        this.subs[event].splice(index, 1);
        if (!this.subs[event].length) delete this.subs[event];
      }
    }
  }]);

  return EventEmiiter;
}();

module.exports = EventEmiiter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TranslateAction = function () {
  // loading = false;

  function TranslateAction() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TranslateAction);

    this.initOptions(options);
    if (this.text) {
      // 生成并展示翻译窗口
      this.showTranslateBox();
      // 触发取词成功生命周期回调
      this.successLifeCycle();
    }
  }

  // 初始化翻译行为


  _createClass(TranslateAction, [{
    key: 'initOptions',
    value: function initOptions(options) {
      this.text = options.text;
      this.target = options.target;
      this.emitter = options.emitter;
      this.element = options.element;
      this.modal = options.modal;
    }

    /**
     * 显示翻译窗口
     */

  }, {
    key: 'showTranslateBox',
    value: function showTranslateBox() {
      // X定位
      var Xpage = void 0;
      if (this.emitter.TranslateModal.clientWidth + this.target.pageX > document.body.offsetWidth) {
        Xpage = document.body.offsetWidth - this.emitter.TranslateModal.clientWidth;
      } else {
        Xpage = this.target.pageX;
      }
      // Y定位
      var Ypage = void 0;
      var offset = 10; // 默认偏移量（鼠标定位之后再增加多少漂移）
      // console.log('网页可见区域高度',document.body.offsetHeight)
      // console.log('网页可见区域高',document.body.clientHeight)
      // console.log('网页正文全文高',document.body.scrollHeight)
      // console.log('屏幕可用工作区高度',window.screen.availHeight)
      // console.log('屏幕分辨率的高',window.screen.height)
      if (this.emitter.TranslateModal.clientHeight + this.target.pageY + offset > document.body.offsetHeight) {
        Ypage = this.target.pageY - this.emitter.TranslateModal.clientHeight - offset;
      } else {
        Ypage = this.target.pageY + offset;
      }

      this.modal.style.left = Xpage + 'px';
      this.modal.style.top = Ypage + 'px';
      this.modal.style.opacity = 1;
    }

    /**
     * 取词成功的生命周期回调
     */

  }, {
    key: 'successLifeCycle',
    value: function successLifeCycle() {
      this.emitter.trigger('success', this.text);
    }
  }]);

  return TranslateAction;
}();

module.exports = TranslateAction;

/***/ })
/******/ ]);
});