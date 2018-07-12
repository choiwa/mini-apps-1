"use strict";

var F2 = function F2(props) {
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
      )
    )
  );
};

window.F2 = F2;

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9mMi5qc3giXSwibmFtZXMiOlsiRjIiLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsS0FBRDtBQUFBLFNBQ1A7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZBO0FBR0EsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsY0FBdEI7QUFIQSxPQURGO0FBTUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsY0FBdEI7QUFGQSxPQU5GO0FBVUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEI7QUFGQSxPQVZGO0FBY0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUEsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsT0FBdEI7QUFGQSxPQWRGO0FBa0JFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBLHVDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFNBQXRCO0FBRkE7QUFsQkY7QUFERixHQURPO0FBQUEsQ0FBVDs7QUE0QkFDLE9BQU9GLEVBQVAsR0FBWUEsRUFBWjs7QUFHQSIsImZpbGUiOiJmMi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGMiA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxmb3JtPlxuICAgICAgPHA+XG4gICAgICA8aDI+QWRkcmVzczwvaDI+XG4gICAgICA8bGFiZWw+bGluZSAxPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc0xpbmUxXCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPmxpbmUgMjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZHJlc3NMaW5lMlwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgIDxsYWJlbD5DaXR5PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgIDxsYWJlbD5TdGF0ZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN0YXRlXCI+PC9pbnB1dD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgPGxhYmVsPlppcCBDb2RlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiemlwQ29kZVwiPjwvaW5wdXQ+XG4gICAgICA8L3A+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5GMiA9IEYyO1xuXG5cbi8vIEYyIGNvbGxlY3RzIHNoaXAgdG8gYWRkcmVzcyAobGluZSAxLCBsaW5lIDIsIGNpdHksIHN0YXRlLCB6aXAgY29kZSkgYW5kIHBob25lIG51bWJlci5cbiJdfQ==