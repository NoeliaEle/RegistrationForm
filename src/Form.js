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



      <form onSubmit={this.handleFormSubmit}>
        <section class="fields-component">
          <div class="column-one">

            <div class="email-field">
              <label>Email:</label>
              <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleInput(e)} />
            </div>
          </div>
          <div class="column-two">
            <div class="password-field">
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleInput(e)} />
            </div>
            <button class="submit-button">Submit</button>
          </div>
        </section>
      </form>



    )
  }
}

export default Form;
