"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mhsD3Core = require('mhs-d3-core');

var _mhsD3Shape = require('mhs-d3-shape');

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScatterPlot = function (_Component) {
  _inherits(ScatterPlot, _Component);

  function ScatterPlot(props) {
    _classCallCheck(this, ScatterPlot);

    return _possibleConstructorReturn(this, (ScatterPlot.__proto__ || Object.getPrototypeOf(ScatterPlot)).call(this, props));
  }

  _createClass(ScatterPlot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          margins = _props.margins,
          data = _props.data,
          chartSeries = _props.chartSeries,
          showXGrid = _props.showXGrid,
          showYGrid = _props.showYGrid,
          showLegend = _props.showLegend,
          categoricalColors = _props.categoricalColors;


      var xgrid, ygrid;

      if (showXGrid) xgrid = _react2.default.createElement(_mhsD3Core.Xgrid, null);
      if (showYGrid) ygrid = _react2.default.createElement(_mhsD3Core.Ygrid, null);

      return _react2.default.createElement(
        'div',
        null,
        showLegend ? _react2.default.createElement(_mhsD3Core.Legend, _extends({}, this.props, {
          width: width,
          margins: margins,
          chartSeries: chartSeries,
          categoricalColors: categoricalColors
        })) : null,
        _react2.default.createElement(
          _mhsD3Shape.Chart,
          _extends({}, this.props, {
            width: width,
            height: height,
            data: data,
            chartSeries: chartSeries
          }),
          _react2.default.createElement(_mhsD3Shape.Scatter, {
            chartSeries: chartSeries
          }),
          xgrid,
          ygrid,
          _react2.default.createElement(_mhsD3Core.Xaxis, null),
          _react2.default.createElement(_mhsD3Core.Yaxis, null),
          this.props.children
        )
      );
    }
  }]);

  return ScatterPlot;
}(_react.Component);

ScatterPlot.defaultProps = _commonProps2.default;
ScatterPlot.propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  margins: _propTypes2.default.object.isRequired,
  data: _propTypes2.default.array.isRequired,
  chartSeries: _propTypes2.default.array.isRequired
};
exports.default = ScatterPlot;
module.exports = exports['default'];