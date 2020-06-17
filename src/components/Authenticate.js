import React from "react";

export default class Authenticate extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  loginUser = () => {
    if (!this.state.username.length > 0 && !this.state.password.length > 0) {
      alert("Invalid details");
      return false;
    } else {
      localStorage.setItem("user", this.state.username);
      window.location.reload();
    }
  };

  handleSignin = () => {
    this.loginUser();
  };

  render() {
    return (
      <div className='signin'>
        <form>
          <span className='text'>Login In: </span>
          <input
            type='text'
            name='username'
            placeholder='test@test.com'
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='*******'
            onChange={this.handleChange}
          />
          <button type='button' onClick={this.handleSignin}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}
