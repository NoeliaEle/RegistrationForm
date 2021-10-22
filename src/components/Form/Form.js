import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import PasswordValidation from '../PasswordValidation/PasswordValidation'

import './Form.css';


const Form = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const history = useHistory();


  const handleChange = (isValid, pwd) => {
    setValidPassword(isValid);
    setPassword(pwd)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    //sumit email and password credentials here and redirect after successful call
    history.push(`/success`);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <section className="card">
        <div className="column-one">
          <div className="email-field">
            <label htmlFor="email-input-field">Email:</label>
            <input id="email-input-field" type="email" name="email" value={email} onChange={(value) => setEmail(value.target.value)} />
          </div>
        </div>
        <div className="column-two">
          <PasswordValidation parentCallback={handleChange}></PasswordValidation>
        </div>
        <div className="row-button">
          <button type="submit" className="submit-button" disabled={!validPassword || !email}>Submit</button>
        </div>
      </section>
    </form >
  )
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
