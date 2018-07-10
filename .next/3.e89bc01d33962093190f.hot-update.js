webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Chat__ = __webpack_require__("./components/Chat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./components/layout.js");
var _jsxFileName = '/Users/abdulaziz/Desktop/MyWork/Chat/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var IndexPage = function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = { user: null }, _this.handleKeyUp = function (evt) {
      if (evt.keyCode === 13) {
        var user = evt.target.value;
        _this.setState({ user: user });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IndexPage, [{
    key: 'render',
    value: function render() {
      var user = this.state.user;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */],
        { pageTitle: 'Realtime Chat', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'main',
          { className: 'container-fluid position-absolute h-100 bg-dark', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row position-absolute w-100 h-100', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'section',
              { className: 'col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'px-5 mx-5', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'd-block w-100 h1 text-light', style: { marginTop: -50 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    }
                  },
                  user ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { style: { color: '#999' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        }
                      },
                      '\u0645\u0631\u0631\u0631\u0631\u062D\u0628\u0627\u064B \u0645\u0644\u064A\u0648\u0646!'
                    ),
                    ' ',
                    user
                  ) : '\u0622\u0633\u0645\u0640\u0640\u0640\u0640\u0640\u0643 \u064A\u0627\u062C\u0645\u064A\u0640\u0640\u0640\u0640\u0640\u0644 '
                ),
                !user && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: 'form-control mt-3 px-3 py-2', onKeyUp: this.handleKeyUp, autoComplete: 'off', style: { background: 'transparent', color: '#999', border: 0, borderBottom: '1px solid #666', borderRadius: 0, fontSize: '3rem', fontWeight: 500, boxShadow: 'none !important' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'section',
              { className: 'col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              user && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Chat__["a" /* default */], { activeUser: user, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          'BY Abdulaziz '
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return IndexPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IndexPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPage, 'IndexPage', '/Users/abdulaziz/Desktop/MyWork/Chat/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/abdulaziz/Desktop/MyWork/Chat/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.e89bc01d33962093190f.hot-update.js.map