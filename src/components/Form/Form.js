import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'

import PasswordValidation from '../PasswordValidation/PasswordValidation'
import '../../App.css';


const Form = () => {
  const [email, setEmail] = useState("")
  const [validPassword, setValidPassword] = useState(false)

  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault()
    history.push(`/success`);
    //send credentials to BE to be added here
  };


  return (
    <form onSubmit={handleOnSubmit}>
      <section className="form-card">
        <div className="column-one">
          <div className="email-field">
            <label>Email:</label>
            <input id="email-input-field" type="email" name="email" value={email} onChange={(value) => setEmail(value.target.value)} />
          </div>
        </div>
        <div className="column-two">
          <PasswordValidation parentCallback={value => setValidPassword(value)}></PasswordValidation>
        </div>
        <div className="component-three">
          <button className="submit-button" disabled={!validPassword || !email}>Submit</button>
        </div>
      </section>
    </form >
  )
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
