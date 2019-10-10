"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*eslint-disable no-unused-expressions*/
var _default = function _default(props) {
  return _react["default"].createElement(_Button["default"], {
    variant: "contained"
  }, props.children);
};

exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _styles2 = require("@material-ui/core/styles");

var _pink = _interopRequireDefault(require("@material-ui/core/colors/pink"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _styles2.createMuiTheme)({
  palette: {
    primary: _pink["default"]
  }
});

var _default = function _default(props) {
  return _react["default"].createElement(_styles.ThemeProvider, {
    theme: theme
  }, _react["default"].createElement(_TextField["default"], {
    label: "Dense",
    margin: "dense"
  }));
};

exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input["default"];
  }
});

var _Button = _interopRequireDefault(require("./src/Button"));

var _Input = _interopRequireDefault(require("./src/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
