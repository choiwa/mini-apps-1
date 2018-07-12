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

    _this.form1Handler = _this.form1Handler.bind(_this);

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      if (this.state.count === 0) {
        return (
          // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              { type: "button", id: "process", onClick: this.form1Handler },
              "Check Out"
            )
          )
        );
      }
      if (this.state.count === 1) {
        return (
          // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
          React.createElement(PersonalInfo, { form1Handler: this.form1Handler })
        );
      }
      if (this.state.count === 2) {
        return (
          // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
          React.createElement(Address, { form1Handler: this.form1Handler })
        );
      }
      if (this.state.count === 3) {
        return (
          // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
          React.createElement(CreditCardInfo, { form1Handler: this.form1Handler })
        );
      }

      if (this.state.count === 4) {
        return React.createElement(Confirmation, { form1Handler: this.form1Handler });
      }

      if (this.state.count === 4) {
        return React.createElement(PersonalInfo, { form1Handler: this.form1Handler });
      }
    }
  }, {
    key: "form1Handler",
    value: function form1Handler() {
      if (this.state.count < 4) {
        this.setState({ count: this.state.count + 1 });
      } else {
        this.setState({ count: 0 });
      }
    }
  }]);

  return App;
}(React.Component);

var PersonalInfo = function PersonalInfo(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      null,
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "Name"
        ),
        React.createElement("input", { type: "text", id: "name" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "Email"
        ),
        React.createElement("input", { type: "text", id: "email" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "Password"
        ),
        React.createElement("input", { type: "text", id: "password" })
      ),
      React.createElement(
        "button",
        { type: "button", id: "process", onClick: props.form1Handler },
        "Submit"
      )
    )
  );
};

var Address = function Address(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      null,
      React.createElement(
        "p",
        null,
        React.createElement(
          "h2",
          null,
          "Address"
        ),
        React.createElement(
          "label",
          null,
          "line 1"
        ),
        React.createElement("input", { type: "text", id: "addressLine1" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "line 2"
        ),
        React.createElement("input", { type: "text", id: "addressLine2" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "City"
        ),
        React.createElement("input", { type: "text", id: "city" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "State"
        ),
        React.createElement("input", { type: "text", id: "state" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "Zip Code"
        ),
        React.createElement("input", { type: "text", id: "zipCode" })
      ),
      React.createElement(
        "button",
        { type: "button", id: "process", onClick: props.form1Handler },
        "Submit"
      )
    )
  );
};

var CreditCardInfo = function CreditCardInfo(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      null,
      React.createElement(
        "p",
        null,
        React.createElement(
          "h2",
          null,
          "Credit Card Information"
        ),
        React.createElement(
          "label",
          null,
          "Credit Card #"
        ),
        React.createElement("input", { type: "text", id: "ccNum" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "Expiration"
        ),
        React.createElement("input", { type: "text", id: "expiration" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "CVV"
        ),
        React.createElement("input", { type: "text", id: "cvv" })
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "Billing Zip Code"
        ),
        React.createElement("input", { type: "text", id: "billingZipCode" })
      ),
      React.createElement(
        "button",
        { type: "button", id: "process", onClick: props.form1Handler },
        "Submit"
      )
    )
  );
};

var Confirmation = function Confirmation(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Thank you for shopping with us"
    ),
    React.createElement(
      "button",
      { type: "button", id: "process", onClick: props.form1Handler },
      "Finish!"
    )
  );
};

// window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiZm9ybTFIYW5kbGVyIiwiYmluZCIsInN0YXRlIiwiY291bnQiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUGVyc29uYWxJbmZvIiwiQWRkcmVzcyIsIkNyZWRpdENhcmRJbmZvIiwiQ29uZmlybWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjs7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFKaUI7QUFPbEI7Ozs7NkJBRVE7QUFDUCxVQUFJLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF6QixFQUE0QjtBQUMxQjtBQUNFO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixJQUFHLFNBQXpCLEVBQW1DLFNBQVMsS0FBS0gsWUFBakQ7QUFBQTtBQUFBO0FBREE7QUFGRjtBQU1EO0FBQ0QsVUFBSSxLQUFLRSxLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUI7QUFDRTtBQUNBLDhCQUFDLFlBQUQsSUFBYyxjQUFjLEtBQUtILFlBQWpDO0FBRkY7QUFJRDtBQUNELFVBQUksS0FBS0UsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCO0FBQ0U7QUFDQSw4QkFBQyxPQUFELElBQVMsY0FBYyxLQUFLSCxZQUE1QjtBQUZGO0FBSUQ7QUFDRCxVQUFJLEtBQUtFLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF6QixFQUE0QjtBQUMxQjtBQUNFO0FBQ0EsOEJBQUMsY0FBRCxJQUFnQixjQUFjLEtBQUtILFlB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O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFFQSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxZQUF0QjtBQUZBLE9BTkY7QUFVRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFFQSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxLQUF0QjtBQUZBLE9BVkY7QUFjRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFFQSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxnQkFBdEI7QUFGQSxPQWRGO0FBa0JFO0FBQUE7QUFBQSxVQUFRLE1BQUssUUFBYixFQUFzQixJQUFHLFNBQXpCLEVBQW1DLFNBQVNBLE1BQU1DLFlBQWxEO0FBQUE7QUFBQTtBQWxCRjtBQURGLEdBRG1CO0FBQUEsQ0FBckI7O0FBeUJBLElBQUlVLGVBQWUsU0FBZkEsWUFBZSxDQUFDWCxLQUFEO0FBQUEsU0FDakI7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKO0FBRUk7QUFBQTtBQUFBLFFBQVEsTUFBSyxRQUFiLEVBQXNCLElBQUcsU0FBekIsRUFBbUMsU0FBU0EsTUFBTUMsWUFBbEQ7QUFBQTtBQUFBO0FBRkosR0FEaUI7QUFBQSxDQUFuQjs7QUFPQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmZvcm0xSGFuZGxlciA9IHRoaXMuZm9ybTFIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnQ6IDBcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIEFkamFjZW50IEpTWCBlbGVtZW50cyBtdXN0IGJlIHdyYXBwZWQgaW4gYW4gZW5jbG9zaW5nIHRhZyAgbWVhbnMgd2UgbmVlZCB0byB3cmFwIGl0IHdpdGggPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcm9jZXNzXCIgb25DbGljaz17dGhpcy5mb3JtMUhhbmRsZXJ9PkNoZWNrIE91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyBBZGphY2VudCBKU1ggZWxlbWVudHMgbXVzdCBiZSB3cmFwcGVkIGluIGFuIGVuY2xvc2luZyB0YWcgIG1lYW5zIHdlIG5lZWQgdG8gd3JhcCBpdCB3aXRoIDxkaXY+XG4gICAgICAgIDxQZXJzb25hbEluZm8gZm9ybTFIYW5kbGVyPXt0aGlzLmZvcm0xSGFuZGxlcn0vPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIEFkamFjZW50IEpTWCBlbGVtZW50cyBtdXN0IGJlIHdyYXBwZWQgaW4gYW4gZW5jbG9zaW5nIHRhZyAgbWVhbnMgd2UgbmVlZCB0byB3cmFwIGl0IHdpdGggPGRpdj5cbiAgICAgICAgPEFkZHJlc3MgZm9ybTFIYW5kbGVyPXt0aGlzLmZvcm0xSGFuZGxlcn0vPlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIEFkamFjZW50IEpTWCBlbGVtZW50cyBtdXN0IGJlIHdyYXBwZWQgaW4gYW4gZW5jbG9zaW5nIHRhZyAgbWVhbnMgd2UgbmVlZCB0byB3cmFwIGl0IHdpdGggPGRpdj5cbiAgICAgICAgPENyZWRpdENhcmRJbmZvIGZvcm0xSGFuZGxlcj17dGhpcy5mb3JtMUhhbmRsZXJ9Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnQgPT09IDQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlybWF0aW9uIGZvcm0xSGFuZGxlcj17dGhpcy5mb3JtMUhhbmRsZXJ9Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZih0aGlzLnN0YXRlLmNvdW50ID09PSA0KSB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxQZXJzb25hbEluZm8gZm9ybTFIYW5kbGVyPXt0aGlzLmZvcm0xSGFuZGxlcn0vPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGZvcm0xSGFuZGxlcigpe1xuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50IDwgNCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OiB0aGlzLnN0YXRlLmNvdW50ICsgMX0pXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDB9KVxuICB9XG4gIH07XG59XG5cbnZhciBQZXJzb25hbEluZm8gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8Zm9ybT5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIj48L2lucHV0PlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInByb2Nlc3NcIiBvbkNsaWNrPXtwcm9wcy5mb3JtMUhhbmRsZXJ9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pO1xuXG52YXIgQWRkcmVzcyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxmb3JtPlxuICAgICAgPHA+XG4gICAgICA8aDI+QWRkcmVzczwvaDI+XG4gICAgICA8bGFiZWw+bGluZSAxPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc0xpbmUxXCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPmxpbmUgMjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZHJlc3NMaW5lMlwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN0YXRlXCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPlppcCBDb2RlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiemlwQ29kZVwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInByb2Nlc3NcIiBvbkNsaWNrPXtwcm9wcy5mb3JtMUhhbmRsZXJ9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pO1xuXG52YXIgQ3JlZGl0Q2FyZEluZm8gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8Zm9ybT5cbiAgICAgIDxwPlxuICAgICAgPGgyPkNyZWRpdCBDYXJkIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgIDxsYWJlbD5DcmVkaXQgQ2FyZCAjPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2NOdW1cIj48L2lucHV0PlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICA8bGFiZWw+RXhwaXJhdGlvbjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImV4cGlyYXRpb25cIj48L2lucHV0PlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICA8bGFiZWw+Q1ZWPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY3Z2XCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPkJpbGxpbmcgWmlwIENvZGU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJiaWxsaW5nWmlwQ29kZVwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInByb2Nlc3NcIiBvbkNsaWNrPXtwcm9wcy5mb3JtMUhhbmRsZXJ9PlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pXG5cbnZhciBDb25maXJtYXRpb24gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICAgIDxoMj5UaGFuayB5b3UgZm9yIHNob3BwaW5nIHdpdGggdXM8L2gyPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJwcm9jZXNzXCIgb25DbGljaz17cHJvcHMuZm9ybTFIYW5kbGVyfT5GaW5pc2ghPC9idXR0b24+XG4gIDwvZGl2PlxuKVxuXG4vLyB3aW5kb3cuQXBwID0gQXBwO1xuIl19