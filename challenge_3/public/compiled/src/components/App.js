"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      name: "joyce",
      email: "joyjoycho@hotmail.com"
    };
    return _this;
  }
  // super(props) {
  //   this.state = {
  //     name: "joyce",
  //     email: "joyjoycho@hotmail.com",
  //     password: "1234"
  //   };
  // }


  _createClass(App, [{
    key: "render",
    value: function render() {
      return (
        // <div>
        // <button type="button" id="process">Check Out</button>
        // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
        React.createElement(
          "div",
          null,
          React.createElement(F1, { name: this.state.name }),
          React.createElement(F2, { name: this.state.name }),
          React.createElement(F3, { name: this.state.name })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLE9BREs7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFIaUI7QUFPbEI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBS1M7QUFDUDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDhCQUFDLEVBQUQsSUFBSSxNQUFRLEtBQUtGLEtBQUwsQ0FBV0MsSUFBdkIsR0FEQTtBQUVBLDhCQUFDLEVBQUQsSUFBSSxNQUFRLEtBQUtELEtBQUwsQ0FBV0MsSUFBdkIsR0FGQTtBQUdBLDhCQUFDLEVBQUQsSUFBSSxNQUFRLEtBQUtELEtBQUwsQ0FBV0MsSUFBdkI7QUFIQTtBQUpGO0FBVUQ7Ozs7RUEvQmVFLE1BQU1DLFM7O0FBa0N4QkMsT0FBT1AsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiam95Y2VcIixcbiAgICAgIGVtYWlsOiBcImpveWpveWNob0Bob3RtYWlsLmNvbVwiXG4gICAgfVxuICB9XG4gIC8vIHN1cGVyKHByb3BzKSB7XG4gIC8vICAgdGhpcy5zdGF0ZSA9IHtcbiAgLy8gICAgIG5hbWU6IFwiam95Y2VcIixcbiAgLy8gICAgIGVtYWlsOiBcImpveWpveWNob0Bob3RtYWlsLmNvbVwiLFxuICAvLyAgICAgcGFzc3dvcmQ6IFwiMTIzNFwiXG4gIC8vICAgfTtcbiAgLy8gfVxuXG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPGRpdj5cbiAgICAgIC8vIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicHJvY2Vzc1wiPkNoZWNrIE91dDwvYnV0dG9uPlxuICAgICAgLy8gQWRqYWNlbnQgSlNYIGVsZW1lbnRzIG11c3QgYmUgd3JhcHBlZCBpbiBhbiBlbmNsb3NpbmcgdGFnICBtZWFucyB3ZSBuZWVkIHRvIHdyYXAgaXQgd2l0aCA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxGMSBuYW1lID0ge3RoaXMuc3RhdGUubmFtZX0vPlxuICAgICAgPEYyIG5hbWUgPSB7dGhpcy5zdGF0ZS5uYW1lfS8+XG4gICAgICA8RjMgbmFtZSA9IHt0aGlzLnN0YXRlLm5hbWV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcbiJdfQ==