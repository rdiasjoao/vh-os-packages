"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _Icon = _interopRequireDefault(require("../../Components/Input/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSocialSection = function VHSocialSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Social Profile",
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    marginBottom4: true
  }, _react.default.createElement(_Icon.default, {
    className: "",
    disabled: props.controls.linkedin.loading,
    error: props.controls.linkedin.error,
    loading: props.controls.linkedin.loading,
    data: 'linkedin',
    icon: "linkedin",
    onEvent: props.onEvent,
    placeholder: "http://linkedin.com/",
    value: props.data.linkedin.value
  })), _react.default.createElement(_Grid.Row, {
    marginBottom4: true
  }, _react.default.createElement(_Icon.default, {
    className: "",
    disabled: props.controls.github.loading,
    error: props.controls.github.error,
    loading: props.controls.github.loading,
    data: 'github',
    icon: "github",
    onEvent: props.onEvent,
    placeholder: "http://github.com/",
    value: props.data.github.value
  })), _react.default.createElement(_Grid.Row, {
    marginBottom4: true
  }, _react.default.createElement(_Icon.default, {
    className: "",
    disabled: props.controls.world.loading,
    error: props.controls.world.error,
    loading: props.controls.world.loading,
    placeholder: "http://sitename.com/",
    value: props.data.world.value,
    data: 'world',
    icon: "world",
    onEvent: props.onEvent
  })))));
};

VHSocialSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHSocialSection;
exports.default = _default;