import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import PasswordValidation from '../PasswordValidation/PasswordValidation'
import '../../App.css';


const Form = () => {
  const [email, setEmail] = useState("")
  const [validPassword, setValidPassword] = useState(false)

  return (
    <form>
      <section className="form-card">
        <div className="column-one">
          <div className="email-field">
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={(value) => setEmail(value.target.value)} />
          </div>
        </div>
        <div className="column-two">
          <PasswordValidation parentCallback={value => setValidPassword(value)}></PasswordValidation>
          <button className="submit-button" disabled={!validPassword || !email}>Submit</button>
        </div>
      </section>
    </form >
  )
}


Form.propTypes = {};

Form.defaultProps = {};

export default Form;
