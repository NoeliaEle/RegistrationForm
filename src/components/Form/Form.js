import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import PasswordValidation from '../PasswordValidation/PasswordValidation'
import '../../App.css';

class Form extends Component {
  state = {
    email: '',
    password: ''
  }
  callback = (value) => {
    value ? console.log("Value is true!") : console.log("Value is false")
  }

  handleInput(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    })
    // console.log(this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <section className="fields-component">
          <div className="column-one">
            <div className="email-field">
              <label>Email:</label>
              <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleInput(e)} />
            </div>
          </div>
          <div className="column-two">
            <div className="password-field">
              <label>Password:</label>
              <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleInput(e)} />
            </div>
            <PasswordValidation typedPassword={this.state.password} parentCallback={this.callback}></PasswordValidation>
            <button className="submit-button">Submit</button>
          </div>
        </section>
      </form>



    )
  }
}


Form.propTypes = {};

Form.defaultProps = {};

export default Form;
