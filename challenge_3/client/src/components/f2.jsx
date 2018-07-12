var F2 = (props) => (
  <div>
    <form>
      <p>
      <h2>Address</h2>
      <label>line 1</label>
      <input type="text" id="addressLine1"></input>
      </p>
      <p>
      <label>line 2</label>
      <input type="text" id="addressLine2"></input>
      </p>
      <p>
      <label>City</label>
      <input type="text" id="city"></input>
      </p>
      <p>
      <label>State</label>
      <input type="text" id="state"></input>
      </p>
      <p>
      <label>Zip Code</label>
      <input type="text" id="zipCode"></input>
      </p>
    </form>
  </div>
);

window.F2 = F2;


// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
