import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  state = {
    email: '',
    password: ''
  }

  handleInput(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleInput(e)} />
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleInput(e)} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
