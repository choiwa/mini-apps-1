"use strict";

var F3 = function F3(props) {
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
      )
    )
  );
};

window.F3 = F3;

// F3 collects credit card #, expiry date, CVV, and billing zip code.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9mMy5qc3giXSwibmFtZXMiOlsiRjMiLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsS0FBRDtBQUFBLFNBQ1A7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZBO0FBR0EsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsT0FBdEI7QUFIQSxPQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsWUFBdEI7QUFGQSxPQU5GO0FBVUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsS0FBdEI7QUFGQSxPQVZGO0FBY0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsZ0JBQXRCO0FBRkE7QUFkRjtBQURGLEdBRE87QUFBQSxDQUFUOztBQXlCQUMsT0FBT0YsRUFBUCxHQUFZQSxFQUFaOztBQUdBIiwiZmlsZSI6ImYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEYzID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGZvcm0+XG4gICAgICA8cD5cbiAgICAgIDxoMj5DcmVkaXQgQ2FyZCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICA8bGFiZWw+Q3JlZGl0IENhcmQgIzwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNjTnVtXCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPkV4cGlyYXRpb248L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJleHBpcmF0aW9uXCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPkNWVjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImN2dlwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgIDxsYWJlbD5CaWxsaW5nIFppcCBDb2RlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYmlsbGluZ1ppcENvZGVcIj48L2lucHV0PlxuICAgICAgPC9wPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pO1xuXG5cbndpbmRvdy5GMyA9IEYzO1xuXG5cbi8vIEYzIGNvbGxlY3RzIGNyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlLlxuIl19