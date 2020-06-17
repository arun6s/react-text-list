import React from "react";
import List from "./components/List";
import Authenticate from "./components/Authenticate";

class App extends React.Component {
  state = {
    user: "",
  };

  checkUserSignedIn = () => {
    const user = localStorage.getItem("user");
    this.setState({
      user: user,
    });
  };

  componentDidMount() {
    this.checkUserSignedIn();
  }
  render() {
    return (
      <div className='App'>{this.state.user ? <List /> : <Authenticate />}</div>
    );
  }
}

export default App;
