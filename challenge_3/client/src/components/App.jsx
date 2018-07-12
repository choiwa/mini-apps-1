class App extends React.Component {
  constructor(props) {
    super(props);
    this.form1Handler = this.form1Handler.bind(this);

    this.state = {
      count: 0
    }
  }

  render() {
    if (this.state.count === 0) {
      return (
        // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
        <div>
        <button type="button" id="process" onClick={this.form1Handler}>Check Out</button>
        </div>
      );
    }
    if (this.state.count === 1) {
      return (
        // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
        <PersonalInfo form1Handler={this.form1Handler}/>
      );
    }
    if (this.state.count === 2) {
      return (
        // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
        <Address form1Handler={this.form1Handler}/>
      );
    }
    if (this.state.count === 3) {
      return (
        // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
        <CreditCardInfo form1Handler={this.form1Handler}/>
      );
    }

    if (this.state.count === 4) {
      return (
      <Confirmation form1Handler={this.form1Handler}/>
      )
    }

    if(this.state.count === 4) {
      return(
        <PersonalInfo form1Handler={this.form1Handler}/>
      )
    }
  }

  form1Handler(){
    if (this.state.count < 4) {
    this.setState({count: this.state.count + 1})
  } else {
    this.setState({count: 0})
  }
  };
}

var PersonalInfo = (props) => (
  <div>
    <form>
      <p>
      <label>Name</label>
      <input type="text" id="name"></input>
      </p>
      <p>
      <label>Email</label>
      <input type="text" id="email"></input>
      </p>
      <p>
      <label>Password</label>
      <input type="text" id="password"></input>
      </p>
      <button type="button" id="process" onClick={props.form1Handler}>Submit</button>
    </form>
  </div>
);

var Address = (props) => (
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
      <button type="button" id="process" onClick={props.form1Handler}>Submit</button>
    </form>
  </div>
);

var CreditCardInfo = (props) => (
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
      <button type="button" id="process" onClick={props.form1Handler}>Submit</button>
    </form>
  </div>
)

var Confirmation = (props) => (
  <div>
      <h2>Thank you for shopping with us</h2>
      <button type="button" id="process" onClick={props.form1Handler}>Finish!</button>
  </div>
)

// window.App = App;
