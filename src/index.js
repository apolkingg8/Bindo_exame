'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = require('./Component/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Component/Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
    _inherits(Root, _React$Component);

    function Root() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Root);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Root)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.render = function () {

            return _react2.default.createElement(
                'div',
                { style: { height: '100%' } },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(_Body2.default, null)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Root;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('root'));

//# sourceMappingURL=index.js.map