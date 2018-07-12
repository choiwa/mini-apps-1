var F3 = (props) => (
  <div>
    <form>
      <p>
      <h2>Credit Card Information</h2>
      <label>Credit Card #</label>
      <input type="text" id="ccNum"></input>
      </p>
      <p>
      <label>Expiration</label>
      <input type="text" id="expiration"></input>
      </p>
      <p>
      <label>CVV</label>
      <input type="text" id="cvv"></input>
      </p>
      <p>
      <label>Billing Zip Code</label>
      <input type="text" id="billingZipCode"></input>
      </p>
    </form>
  </div>
);


window.F3 = F3;


// F3 collects credit card #, expiry date, CVV, and billing zip code.
