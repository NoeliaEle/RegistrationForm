import React, { useState } from 'react';

import PasswordChecklist from "react-password-checklist"
//PasswordCheckList makes tests fails. Deactivate for running tests

import './PasswordValidation.css';

const PasswordValidation = ({ parentCallback }) => {
  const [password, setPassword] = useState("")
  return (
    <div>
      <div className="password-field">
        <label htmlFor="password">Password:</label>
        <input id="password-input-field" type="password" onChange={e => setPassword(e.target.value)}></input>
      </div>
      <PasswordChecklist
        rules={["minLength", "lowercase", "capital", "number", "specialChar"]}
        minLength={8}
        value={password}
        onChange={(isValid) => { parentCallback(isValid, password) }}
        messages={{
          minLength: "8+ characters",
          lowercase: "lowercase letter",
          capital: "uppercase letter",
          number: "number",
          specialChar: "special character",

        }}
        iconSize={10}
        className="Password-checklist"
      />
    </div>
  )
}

export default PasswordValidation;
