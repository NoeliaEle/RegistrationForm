import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import PasswordValidation from '../PasswordValidation/PasswordValidation'
import '../../App.css';

class Form extends Component {

  state = {
    email: '',
    validPassword: false
  }

  updateValidPassword(value) {
    this.setState({
      validPassword: value
    })
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
        <section className="fields-component">
          <div className="column-one">
            <div className="email-field">
              <label>Email:</label>
              <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleInput(e)} />
            </div>
          </div>
          <div className="column-two">
            <PasswordValidation parentCallback={value => this.updateValidPassword(value)}></PasswordValidation>
            <button className="submit-button" disabled={!this.state.validPassword || !this.state.email}>Submit</button>
          </div>
        </section>
      </form >
    )
  }
}


Form.propTypes = {};

Form.defaultProps = {};

export default Form;
