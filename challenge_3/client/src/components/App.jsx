class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "joyce",
      email: "joyjoycho@hotmail.com"
    }
  }
  // super(props) {
  //   this.state = {
  //     name: "joyce",
  //     email: "joyjoycho@hotmail.com",
  //     password: "1234"
  //   };
  // }




  render() {
    return (
      // <div>
      // <button type="button" id="process">Check Out</button>
      // Adjacent JSX elements must be wrapped in an enclosing tag  means we need to wrap it with <div>
      <div>
      <F1 name = {this.state.name}/>
      <F2 name = {this.state.name}/>
      <F3 name = {this.state.name}/>
      </div>
    );
  }
}

window.App = App;
