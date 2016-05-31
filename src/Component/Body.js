'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SideMenu = require('./SideMenu');

var _SideMenu2 = _interopRequireDefault(_SideMenu);

var _Inventory = require('./Inventory');

var _Inventory2 = _interopRequireDefault(_Inventory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Body);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Body)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            routeName: "Inventory"
        }, _this._onItemClick = function (itemName, i) {

            _this.setState({
                routeName: itemName
            });
        }, _this._renderContent = function () {
            var routeName = _this.state.routeName;
            var res = void 0;

            switch (routeName) {
                case 'Sales':
                    res = _react2.default.createElement(
                        'div',
                        null,
                        'Sales'
                    );
                    break;

                case 'Inventory':
                    res = _react2.default.createElement(_Inventory2.default, null);
                    break;

                case 'Suppliers':
                    res = _react2.default.createElement(
                        'div',
                        null,
                        'Suppliers'
                    );
                    break;

                case 'Costumers':
                    res = _react2.default.createElement(
                        'div',
                        null,
                        'Costumers'
                    );
                    break;
            }

            return res;
        }, _this.render = function () {

            return _react2.default.createElement(
                'div',
                { className: 'body' },
                _react2.default.createElement(_SideMenu2.default, {
                    items: ['Sales', 'Inventory', 'Suppliers', 'Costumers'],
                    onItemClick: _this._onItemClick
                }),
                _this._renderContent()
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Body;
}(_react2.default.Component);

exports.default = Body;

//# sourceMappingURL=Body.js.map