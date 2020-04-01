"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var flag_brazil = function flag_brazil(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "50",
    height: props.height || "38",
    fill: props.fill || "none",
    viewBox: props.viewBox || "0 0 50 38"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 0H50V37.5H0V0Z",
    fill: "#229E45"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25.1094 34.0625L48.6641 18.7734L24.9688 3.4375L1.33594 18.8047L25.1094 34.0625Z",
    fill: "#F8E509"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M35.375 18.75C35.375 24.2422 30.9141 28.6953 25.4063 28.6953C23.438 28.6922 21.5149 28.1056 19.88 27.0098C18.2452 25.9139 16.9719 24.3579 16.2212 22.5384C15.4705 20.719 15.276 18.7179 15.6625 16.788C16.0489 14.8581 16.9989 13.0861 18.3922 11.696C19.7856 10.3059 21.5599 9.36012 23.4907 8.97822C25.4215 8.59633 27.4221 8.79546 29.2398 9.55044C31.0574 10.3054 32.6104 11.5824 33.7025 13.2198C34.7945 14.8573 35.3766 16.7818 35.375 18.75V18.75Z",
    fill: "#2B49A3"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.1328 24.7109L21.8203 24.5313L21.5078 24.6875L21.5781 24.3359L21.3281 24.0703L21.6797 24.0313L21.8516 23.7188L22 24.0469L22.3437 24.1094L22.0859 24.3438L22.1328 24.7109ZM28.8047 26.3984L28.5 26.2188L28.1875 26.375L28.25 26.0234L28.0078 25.7656L28.3594 25.7266L28.5234 25.4063L28.6797 25.7344L29.0234 25.7969L28.7578 26.0391L28.8047 26.3984ZM25.9297 23.6953L25.6641 23.5391L25.3906 23.6797L25.4531 23.375L25.2344 23.1484L25.5469 23.1172L25.6875 22.8359L25.8125 23.125L26.1172 23.1797L25.8828 23.3906L25.9297 23.6953ZM32.6797 22.7266L32.4141 22.5703L32.1406 22.7109L32.2031 22.4062L31.9922 22.1875L32.2969 22.1563L32.4375 21.8828L32.5625 22.1641L32.8594 22.2188L32.6328 22.4219L32.6797 22.7266ZM25.8125 20.7031L25.5 20.5312L25.1875 20.6875L25.25 20.3281L25.0078 20.0703L25.3594 20.0312L25.5234 19.7109L25.6797 20.0391L26.0234 20.1016L25.7578 20.3516L25.8125 20.7031ZM17.5859 17.6172L17.2734 17.4453L16.9609 17.6016L17.0391 17.2422L16.7813 16.9844L17.1406 16.9453L17.2969 16.625L17.4531 16.9531L17.7969 17.0156L17.5391 17.2578L17.5859 17.6172ZM18.5781 21.7266L18.2656 21.5469L17.9531 21.7031L18.0234 21.3516L17.7734 21.0938L18.125 21.0469L18.2891 20.7344L18.4453 21.0625L18.7891 21.125L18.5313 21.3672L18.5781 21.7266ZM28.8438 16.1094L28.5625 15.9531L28.2812 16.0938L28.3437 15.7813L28.125 15.5469L28.4375 15.5078L28.5859 15.2266L28.7187 15.5234L29.0312 15.5781L28.7969 15.7891L28.8438 16.1094ZM28.2734 18.7812L28.0625 18.6563L27.8359 18.7656L27.8828 18.5156L27.7109 18.3359L27.9609 18.3047L28.0781 18.0859L28.1797 18.3203L28.4141 18.3594L28.2422 18.5313L28.2734 18.7812ZM17.1328 22.4688L16.9219 22.3516L16.7109 22.4531L16.7578 22.2188L16.5938 22.0469L16.8281 22.0156L16.9375 21.8047L17.0391 22.0234L17.2734 22.0703L17.0938 22.2266L17.1328 22.4688ZM32.7344 23.4219L32.5625 23.3359L32.3906 23.4141L32.4297 23.2344L32.2969 23.1094L32.4844 23.0859L32.5781 22.9297L32.6562 23.0859L32.8516 23.125L32.7031 23.2422",
    fill: "#FFFFEF"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.1328 22.4688L16.9219 22.3516L16.7109 22.4531L16.7578 22.2187L16.5938 22.0469L16.8281 22.0156L16.9375 21.8047L17.0391 22.0234L17.2734 22.0703L17.0937 22.2266",
    fill: "#FFFFEF"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.1328 22.4688L16.9219 22.3516L16.7109 22.4531L16.7578 22.2187L16.5938 22.0469L16.8281 22.0156L16.9375 21.8047L17.0391 22.0234L17.2734 22.0703L17.0938 22.2266L17.1328 22.4688ZM20.3984 22.4609L20.1953 22.3516L19.9844 22.4531L20.0313 22.2187L19.8672 22.0469L20.1016 22.0156L20.2109 21.8047L20.3125 22.0234L20.5469 22.0625L20.3672 22.2266L20.3984 22.4609ZM19.9922 23.5547L19.7891 23.4375L19.5781 23.5469L19.625 23.3125L19.4609 23.1328L19.6953 23.1016L19.8047 22.8906L19.9063 23.1094L20.1406 23.1562L19.9609 23.3125L19.9922 23.5547ZM26.7891 21.5781L26.5859 21.4531L26.3672 21.5625L26.4141 21.3281L26.2578 21.1484L26.4922 21.125L26.6016 20.9141L26.6953 21.1328L26.9297 21.1719L26.7578 21.3359L26.7891 21.5781ZM24.7969 21.5703L24.5859 21.4531L24.375 21.5625L24.4219 21.3281L24.2656 21.1484L24.5 21.125L24.6094 20.9063L24.7031 21.1328L24.9375 21.1719L24.7656 21.3359L24.7969 21.5703ZM19.3906 20.8828L19.2578 20.8047L19.125 20.8672L19.1563 20.7188L19.0547 20.6094L19.2031 20.5938L19.2656 20.4609L19.3281 20.6016L19.4766 20.625L19.3672 20.7266L19.3906 20.8828ZM32.4766 24.2734L32.2735 24.1563L32.0625 24.2656L32.1094 24.0313L31.9453 23.8516L32.1797 23.8203L32.2891 23.6094L32.3906 23.8281L32.625 23.875L32.4453 24.0313L32.4766 24.2734ZM30.8203 24.5L30.6484 24.3906L30.4688 24.4844L30.5078 24.2812L30.375 24.1406L30.5703 24.1172L30.6641 23.9375L30.7422 24.125L30.9375 24.1563L30.7891 24.2969L30.8203 24.5ZM31.6016 24.4766L31.4453 24.3828L31.2813 24.4609L31.3125 24.2812L31.1875 24.1484L31.3672 24.125L31.4531 23.9687L31.5313 24.125L31.711 24.1641L31.5781 24.2891L31.6016 24.4766ZM33.8516 22.5078L33.6953 22.4297L33.5391 22.5078L33.5781 22.3281L33.4531 22.1953L33.6328 22.1719L33.711 22.0156L33.7891 22.1797L33.9531 22.2109L33.8281 22.3359L33.8516 22.5078ZM30.7969 25.6016L30.6016 25.4922L30.3906 25.5859L30.4375 25.3672L30.2813 25.2109L30.5156 25.1875L30.6172 24.9922L30.711 25.1953L30.9453 25.2344L30.7656 25.3828L30.7969 25.6016ZM30.8125 26.4922L30.625 26.3828L30.4375 26.4844L30.4844 26.2656L30.3359 26.1094L30.5469 26.0781L30.6406 25.8828L30.7266 26.0859L30.9375 26.125L30.7813 26.2812L30.8125 26.4922ZM29.2969 24.4766L29.1484 24.3828L28.9922 24.4609L29.0234 24.2891L28.9063 24.1563L29.0781 24.1406L29.1563 23.9844L29.2344 24.1406L29.4063 24.1719L29.2813 24.2969L29.2969 24.4766ZM27.8906 24.4766L27.7344 24.3828L27.5781 24.4609L27.6172 24.2891L27.4922 24.1563L27.6719 24.1406L27.75 23.9844L27.8281 24.1406L27.9922 24.1719L27.8672 24.2969L27.8906 24.4766ZM25.4922 22.375L25.3359 22.2891L25.1797 22.3672L25.2188 22.1875L25.0938 22.0625L25.2656 22.0391L25.3438 21.8828L25.4219 22.0391L25.5938 22.0781L25.4688 22.1953L25.4922 22.375ZM25.7578 26.6484L25.6328 26.5781L25.4922 26.6484L25.5234 26.4922L25.4219 26.3828L25.5703 26.3672L25.6406 26.2344L25.7031 26.375L25.8516 26.3984L25.7422 26.5L25.7578 26.6484ZM22.1328 19.7344L21.8203 19.5547L21.5078 19.7109L21.5781 19.3594L21.3281 19.1016L21.6797 19.0547L21.8516 18.7422L22 19.0703L22.3438 19.1328L22.0859 19.375",
    fill: "#FFFFEF"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M34.7187 22.3281C34.9123 21.8259 35.0639 21.3085 35.1719 20.7812C29.875 16.1328 23.9766 13.75 16.5234 14.2422C16.2531 14.7652 16.0309 15.3118 15.8594 15.875C24.6875 15.0312 31.1719 18.9375 34.7187 22.3281Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32.3437 19.7187L32.5234 19.8203C32.4966 19.8734 32.4884 19.9339 32.5 19.9922C32.5183 20.0487 32.5574 20.0962 32.6094 20.125C32.6641 20.1641 32.7187 20.1875 32.7656 20.1797C32.8125 20.1797 32.8437 20.1562 32.8672 20.125C32.8808 20.1043 32.8864 20.0792 32.8828 20.0547C32.8764 20.0258 32.863 19.999 32.8437 19.9766C32.8281 19.9531 32.7891 19.8984 32.7266 19.8359C32.6623 19.7696 32.6142 19.6894 32.5859 19.6016C32.5664 19.535 32.5715 19.4637 32.6002 19.4006C32.6289 19.3375 32.6793 19.2869 32.7422 19.2578C32.799 19.2341 32.8618 19.2286 32.9219 19.2422C32.9953 19.2591 33.0645 19.291 33.125 19.3359C33.2344 19.4141 33.3047 19.4922 33.3281 19.5859C33.3389 19.6298 33.3403 19.6754 33.3323 19.7199C33.3242 19.7643 33.3068 19.8065 33.2812 19.8437L33.0937 19.7266C33.1172 19.6797 33.125 19.6328 33.1094 19.5937C33.1016 19.5547 33.0703 19.5156 33.0156 19.4844C32.9755 19.4521 32.9264 19.433 32.875 19.4297C32.8608 19.4292 32.8468 19.4326 32.8344 19.4395C32.822 19.4464 32.8118 19.4565 32.8047 19.4687C32.7891 19.4922 32.7891 19.5156 32.7969 19.5469C32.8047 19.5781 32.8437 19.6406 32.9219 19.7187C33 19.7969 33.0469 19.8672 33.0781 19.9141C33.106 19.9653 33.1186 20.0234 33.1145 20.0816C33.1103 20.1397 33.0896 20.1955 33.0547 20.2422C33.0181 20.2953 32.9664 20.3361 32.9062 20.3594C32.8477 20.3863 32.7822 20.3945 32.7187 20.3828C32.6484 20.3672 32.5781 20.3359 32.5 20.2812C32.3828 20.2031 32.3125 20.1172 32.2891 20.0234C32.2636 19.9171 32.2804 19.8051 32.3359 19.7109L32.3437 19.7187ZM31.4375 19.125L31.6328 19.2266C31.6086 19.2805 31.6031 19.341 31.6172 19.3984C31.6372 19.4521 31.6761 19.4965 31.7266 19.5234C31.7891 19.5625 31.8359 19.5781 31.8828 19.5703C31.9297 19.5703 31.9609 19.5469 31.9844 19.5078C31.9962 19.4892 32.0017 19.4673 32 19.4453C32 19.4219 31.9844 19.3906 31.9609 19.3672C31.9209 19.3189 31.8792 19.272 31.8359 19.2266C31.75 19.1406 31.6953 19.0703 31.6797 19.0078C31.6669 18.9676 31.6631 18.9251 31.6685 18.8833C31.6739 18.8414 31.6884 18.8013 31.7109 18.7656C31.7406 18.7174 31.7842 18.6793 31.8359 18.6562C31.8896 18.6315 31.9495 18.6233 32.0078 18.6328C32.0801 18.645 32.1491 18.6715 32.2109 18.7109C32.3281 18.7891 32.3984 18.8672 32.4219 18.9531C32.4361 18.997 32.4407 19.0435 32.4353 19.0894C32.4299 19.1352 32.4147 19.1793 32.3906 19.2187L32.1953 19.1094C32.2187 19.0547 32.2266 19.0156 32.2109 18.9766C32.1953 18.9375 32.1641 18.8984 32.1094 18.8672C32.0661 18.8362 32.0141 18.8197 31.9609 18.8203C31.9481 18.8212 31.9357 18.8252 31.9248 18.832C31.9139 18.8388 31.9048 18.8482 31.8984 18.8594C31.8828 18.8828 31.8828 18.9062 31.8906 18.9375C31.8984 18.9687 31.9453 19.0312 32.0234 19.1094C32.1016 19.1875 32.1562 19.25 32.1797 19.2969C32.211 19.3459 32.2276 19.4028 32.2276 19.4609C32.2276 19.5191 32.211 19.576 32.1797 19.625C32.146 19.6795 32.0971 19.723 32.0391 19.75C31.9805 19.777 31.915 19.7852 31.8516 19.7734C31.7712 19.7598 31.6942 19.7306 31.625 19.6875C31.524 19.6337 31.4462 19.5447 31.4062 19.4375C31.3761 19.3332 31.3873 19.2213 31.4375 19.125V19.125ZM30.3281 18.8281L30.8984 17.8906L31.5859 18.3203L31.4922 18.4766L30.9922 18.1641L30.8672 18.375L31.3359 18.6641L31.2344 18.8203L30.7656 18.5312L30.6094 18.7891L31.1328 19.1016L31.0391 19.2578L30.3359 18.8281H30.3281ZM28.7109 17.5L28.7969 17.3437L29.2187 17.5547L29.0234 17.9453C28.9609 17.9609 28.8828 17.9687 28.7891 17.9609C28.699 17.951 28.6116 17.9245 28.5312 17.8828C28.4367 17.8368 28.3559 17.7667 28.2969 17.6797C28.2431 17.5988 28.2158 17.5033 28.2187 17.4062C28.2227 17.3052 28.2494 17.2064 28.2969 17.1172C28.3438 17.0232 28.4137 16.9426 28.5 16.8828C28.5826 16.8257 28.6809 16.7957 28.7812 16.7969C28.8594 16.7969 28.9375 16.8203 29.0312 16.875C29.1562 16.9297 29.2344 17.0078 29.2734 17.0937C29.3141 17.1791 29.3224 17.2762 29.2969 17.3672L29.0859 17.3047C29.0988 17.2524 29.0933 17.1972 29.0703 17.1484C29.0469 17.1016 29.0078 17.0703 28.9453 17.0391C28.9089 17.0183 28.8685 17.0054 28.8267 17.0014C28.785 16.9973 28.7429 17.0022 28.7031 17.0156C28.625 17.0391 28.5547 17.1094 28.5 17.2187C28.4453 17.3281 28.4219 17.4297 28.4453 17.5156C28.4561 17.5564 28.4757 17.5943 28.5027 17.6267C28.5297 17.6591 28.5634 17.6852 28.6016 17.7031C28.6406 17.7266 28.6875 17.7422 28.7344 17.7422C28.781 17.7493 28.8284 17.7493 28.875 17.7422L28.9375 17.6172L28.7109 17.5V17.5ZM21.6641 15.7578L21.8203 14.6641L22.1484 14.7187L22.2344 15.4844L22.5391 14.7812L22.8672 14.8281L22.7109 15.9062L22.5 15.875L22.6328 15.0234L22.2891 15.8437L22.0781 15.8125L21.9922 14.9297L21.8672 15.7891L21.6641 15.7578V15.7578ZM20.5625 15.625L20.6641 14.5312L21.4687 14.6094L21.4531 14.7969L20.8672 14.7422L20.8437 14.9766L21.3906 15.0312L21.3672 15.2187L20.8203 15.1641L20.7969 15.4609L21.4062 15.5156L21.3906 15.7031L20.5625 15.625V15.625Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.9141 14.9453C16.9141 14.8281 16.9375 14.7422 16.9688 14.6641C16.9962 14.6085 17.0332 14.5582 17.0782 14.5156C17.1182 14.4752 17.1661 14.4433 17.2188 14.4219C17.2969 14.3984 17.375 14.3828 17.4532 14.3828C17.6172 14.3828 17.7422 14.4453 17.8438 14.5391C17.8921 14.5988 17.9281 14.6675 17.9495 14.7413C17.971 14.8151 17.9775 14.8924 17.9688 14.9688C17.9688 15.1406 17.9141 15.2812 17.8125 15.3828C17.7603 15.4311 17.6986 15.4678 17.6313 15.4907C17.564 15.5136 17.4927 15.5221 17.4219 15.5156C17.3521 15.5163 17.2828 15.5028 17.2184 15.476C17.1539 15.4491 17.0956 15.4095 17.0469 15.3594C16.9497 15.2443 16.9019 15.0955 16.9141 14.9453V14.9453Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.1407 14.9453C17.1407 15.0625 17.1641 15.1562 17.2188 15.2266C17.2735 15.289 17.3438 15.3281 17.4375 15.3281C17.4781 15.331 17.5188 15.3247 17.5566 15.3098C17.5945 15.295 17.6285 15.2719 17.6563 15.2422C17.711 15.1797 17.7344 15.0859 17.7422 14.9531C17.7422 14.8281 17.7266 14.7344 17.6641 14.6719C17.6386 14.6404 17.6065 14.6149 17.57 14.5974C17.5336 14.5798 17.4936 14.5706 17.4532 14.5703C17.4121 14.569 17.3712 14.5767 17.3334 14.5929C17.2956 14.6091 17.2618 14.6334 17.2344 14.6641C17.1719 14.7266 17.1485 14.8203 17.1407 14.9453V14.9453Z",
    fill: "#F7FFFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.2031 15.5078L18.2187 14.4141H18.6875C18.8047 14.4141 18.8828 14.4297 18.9375 14.4531C18.9922 14.4688 19.0313 14.5078 19.0625 14.5547C19.0938 14.6016 19.1094 14.6641 19.1094 14.7344C19.11 14.8095 19.0821 14.8821 19.0313 14.9375C18.9735 14.9916 18.8992 15.0246 18.8203 15.0312L18.9375 15.125C18.9688 15.1563 19.0078 15.2187 19.0547 15.3047L19.1875 15.5234H18.9219L18.7656 15.2734L18.6563 15.1172C18.6373 15.0957 18.6131 15.0795 18.5859 15.0703C18.5504 15.0599 18.5136 15.0547 18.4766 15.0547H18.4297V15.5078H18.2031V15.5078Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.4375 14.8828H18.5938C18.7031 14.8828 18.7734 14.8828 18.7969 14.8672C18.8203 14.8672 18.8437 14.8438 18.8594 14.8281C18.875 14.8125 18.8828 14.7734 18.8828 14.75C18.8828 14.7031 18.875 14.6719 18.8516 14.6563C18.8359 14.6328 18.8047 14.6172 18.7734 14.6094H18.6172L18.4375 14.6016V14.875V14.8828Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4531 14.4688L19.8594 14.4922C19.9453 14.4922 20.0156 14.5 20.0625 14.5156C20.1233 14.5377 20.1772 14.5754 20.2187 14.625C20.2638 14.6796 20.2958 14.7437 20.3125 14.8125C20.3359 14.8828 20.3437 14.9688 20.3359 15.0703C20.3359 15.1501 20.3227 15.2292 20.2969 15.3047C20.2656 15.3828 20.2187 15.4453 20.1641 15.4922C20.1185 15.5297 20.0651 15.5564 20.0078 15.5703C19.9609 15.5859 19.8906 15.5859 19.8125 15.5859L19.3984 15.5625L19.4531 14.4688V14.4688Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.6641 14.6641L19.625 15.3906H19.9219C19.9609 15.3906 19.9922 15.375 20.0156 15.3516C20.0391 15.3281 20.0625 15.2969 20.0781 15.25C20.0937 15.2031 20.1094 15.1328 20.1094 15.0469L20.1016 14.8516C20.0904 14.8104 20.0689 14.7727 20.0391 14.7422C20.0131 14.7161 19.9808 14.6972 19.9453 14.6875C19.8862 14.6743 19.8261 14.6665 19.7656 14.6641H19.6641V14.6641Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.8125 16.4219L25.0703 15.3594L25.4141 15.4375L25.6641 15.5156C25.7187 15.5469 25.7656 15.5937 25.7891 15.6641C25.8203 15.7266 25.8203 15.7969 25.8047 15.8828C25.7891 15.9453 25.7656 16 25.7266 16.0391C25.6979 16.0734 25.6621 16.101 25.6216 16.1199C25.5811 16.1388 25.5369 16.1485 25.4922 16.1484C25.4375 16.1484 25.3594 16.1328 25.2578 16.1094L25.125 16.0703L25.0312 16.4766L24.8125 16.4219V16.4219Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.2344 15.5938L25.1719 15.8906L25.2891 15.9219C25.3672 15.9375 25.4297 15.9531 25.4609 15.9453C25.4913 15.9411 25.5197 15.9276 25.5421 15.9066C25.5644 15.8856 25.5798 15.8582 25.5859 15.8281C25.5859 15.7891 25.5859 15.7578 25.5703 15.7266C25.5532 15.6948 25.5256 15.67 25.4922 15.6562L25.3437 15.6172L25.2422 15.5938H25.2344Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.8281 16.7266L26.1953 15.6953L26.625 15.8516C26.7422 15.8906 26.8125 15.9297 26.8594 15.9609C26.8984 16 26.9297 16.0391 26.9375 16.1016C26.9453 16.1641 26.9531 16.2187 26.9375 16.2812C26.9062 16.3594 26.8594 16.4141 26.7969 16.4531C26.7344 16.4844 26.6562 16.4922 26.5625 16.4766C26.5937 16.5156 26.625 16.5547 26.6406 16.6016L26.7031 16.8125L26.75 17.0547L26.5078 16.9687L26.4297 16.6875C26.4155 16.6239 26.3972 16.5613 26.375 16.5C26.3646 16.4757 26.3486 16.4543 26.3281 16.4375C26.3125 16.4141 26.2812 16.3984 26.2266 16.3828L26.1875 16.3672L26.0312 16.8047L25.8281 16.7266V16.7266Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.25 16.2031L26.3984 16.2578C26.5 16.2969 26.5625 16.3125 26.5938 16.3125C26.6172 16.3125 26.6406 16.3125 26.6641 16.2891C26.6875 16.2734 26.7031 16.25 26.7109 16.2188C26.7266 16.1875 26.7266 16.1562 26.7109 16.125C26.6994 16.0947 26.6772 16.0697 26.6484 16.0547L26.4922 16L26.3359 15.9453L26.2422 16.2031H26.25Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.1094 16.6875C27.1362 16.596 27.1814 16.511 27.2422 16.4375C27.2817 16.3904 27.3293 16.3507 27.3828 16.3203C27.4312 16.293 27.4841 16.2744 27.5391 16.2656C27.6172 16.2656 27.6953 16.2656 27.7812 16.2969C27.8511 16.3142 27.9164 16.3461 27.973 16.3905C28.0296 16.435 28.0761 16.4909 28.1094 16.5547C28.1719 16.6797 28.1719 16.8281 28.125 17C28.0863 17.1477 27.9908 17.274 27.8594 17.3516C27.7422 17.4219 27.6016 17.4297 27.4531 17.3828C27.3835 17.3651 27.3183 17.333 27.2618 17.2886C27.2053 17.2442 27.1587 17.1885 27.125 17.125C27.0937 17.0567 27.0762 16.9829 27.0735 16.9078C27.0709 16.8327 27.083 16.7579 27.1094 16.6875V16.6875Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.3281 16.75C27.2969 16.8672 27.2891 16.9687 27.3281 17.0469C27.3672 17.125 27.4219 17.1719 27.5078 17.2031C27.586 17.2266 27.6641 17.2187 27.7422 17.1719C27.8203 17.1328 27.8672 17.0469 27.9063 16.9219C27.9453 16.8047 27.9453 16.7109 27.9063 16.6328C27.8908 16.5957 27.8674 16.5625 27.8377 16.5355C27.808 16.5085 27.7727 16.4884 27.7344 16.4766C27.6959 16.4633 27.6551 16.4585 27.6146 16.4626C27.5742 16.4666 27.5351 16.4794 27.5 16.5C27.4219 16.5469 27.3672 16.625 27.3281 16.75V16.75Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.2422 18.2109L29.7422 17.2422L30.1563 17.4531C30.2343 17.4906 30.3056 17.5407 30.3672 17.6016C30.4063 17.6406 30.4297 17.6875 30.4297 17.75C30.4297 17.8125 30.4297 17.8672 30.3984 17.9219C30.3684 17.9921 30.3124 18.0481 30.2422 18.0781C30.1641 18.0937 30.0859 18.0938 30 18.0625C30.0313 18.1094 30.0469 18.1562 30.0625 18.1953C30.0781 18.2422 30.0859 18.3125 30.0938 18.4141L30.1094 18.6641L29.875 18.5469L29.8438 18.2578C29.84 18.1923 29.8322 18.127 29.8203 18.0625C29.815 18.0333 29.8014 18.0062 29.7813 17.9844L29.6875 17.9297L29.6484 17.9063L29.4375 18.3125L29.2422 18.2109V18.2109Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.7266 17.75L29.875 17.8281C29.9687 17.875 30.0312 17.9062 30.0547 17.9062C30.0781 17.9062 30.1094 17.9063 30.1328 17.8906C30.1562 17.8828 30.1719 17.8594 30.1875 17.8281C30.2031 17.7969 30.2109 17.7656 30.2031 17.7344C30.1935 17.7033 30.1744 17.676 30.1484 17.6563C30.1027 17.6282 30.0558 17.6021 30.0078 17.5781L29.8516 17.5L29.7266 17.75V17.75Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.2891 20.2109C33.3396 20.1306 33.4061 20.0615 33.4844 20.0078C33.537 19.9742 33.5952 19.9503 33.6563 19.9375C33.713 19.9259 33.7714 19.9259 33.8281 19.9375C33.9063 19.9531 33.9766 19.9844 34.0469 20.0312C34.1077 20.0691 34.1599 20.1193 34.2003 20.1784C34.2406 20.2376 34.2682 20.3046 34.2812 20.375C34.3047 20.5078 34.2656 20.6562 34.1719 20.8047C34.0935 20.9338 33.967 21.0265 33.8203 21.0625C33.7504 21.0776 33.678 21.0778 33.608 21.063C33.538 21.0481 33.4719 21.0187 33.4141 20.9766C33.3533 20.9387 33.301 20.8886 33.2607 20.8294C33.2203 20.7702 33.1928 20.7032 33.1797 20.6328C33.1563 20.4922 33.1953 20.3516 33.2891 20.2109Z",
    fill: "#309E3A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.4844 20.3359C33.4063 20.4375 33.3828 20.5313 33.3985 20.6172C33.4042 20.6568 33.4183 20.6947 33.4399 20.7283C33.4614 20.762 33.4899 20.7907 33.5235 20.8125C33.6016 20.8672 33.6797 20.8828 33.7578 20.8594C33.8359 20.8359 33.9141 20.7813 33.9844 20.6719C34.0547 20.5625 34.0859 20.4688 34.0703 20.3906C34.0625 20.3125 34.0156 20.2422 33.9453 20.1875C33.875 20.1328 33.7891 20.125 33.7109 20.1484C33.6328 20.1641 33.5547 20.2266 33.4766 20.3359H33.4844Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.5781 15.9766L23.7578 15.2109L24.3203 15.3437L24.2969 15.4688L23.8828 15.375L23.8438 15.5469L24.2266 15.6328L24.1953 15.7656L23.8125 15.6719L23.7656 15.8828L24.1953 15.9844L24.1641 16.1094L23.5781 15.9766V15.9766Z",
    fill: "#309E3A"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H50V37.5H0V0Z",
    fill: "white"
  }))));
};

var _default = flag_brazil;
exports.default = _default;