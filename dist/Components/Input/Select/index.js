"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _animated = _interopRequireDefault(require("react-select/animated"));

var _Text = _interopRequireDefault(require("../../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animatedComponents = (0, _animated.default)();

var VHSelect = function VHSelect(props) {
  return _react.default.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '21px'
    }
  }, props.caption && _react.default.createElement(_Text.default, {
    text: props.caption,
    variant: "platform1",
    color: props.captionColor
  }), _react.default.createElement(_reactSelect.default, {
    closeMenuOnSelect: !props.isMulti,
    className: props.className,
    isLoading: props.isLoading,
    isDisabled: props.isLoading,
    components: animatedComponents,
    defaultValue: props.currentItem,
    isMulti: props.isMulti,
    isClearable: true,
    options: props.items,
    onChange: function onChange(newValue, actionMeta) {
      switch (true) {
        case actionMeta.action === "remove-value":
          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: actionMeta.removedValue,
              action: 'delete'
            }
          });
          break;

        case actionMeta.action === "clear":
          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: null,
              action: "clear"
            }
          });
          break;

        case actionMeta.action === "select-option":
          props.onEvent({
            type: "OnChange",
            origin: "VHSelect",
            props: {
              data: props.data,
              item: props.isMulti ? actionMeta.option : newValue,
              action: 'add'
            }
          });
          break;
      }
    }
  }), props.description && _react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: '60px'
    }
  }, _react.default.createElement(_Text.default, {
    text: props.description,
    variant: "caption",
    color: props.descriptionColor
  })));
};

var _default = VHSelect;
exports.default = _default;