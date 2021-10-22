import React, { useState } from 'react';
import PasswordChecklist from "react-password-checklist"
import '../../App.css';



const PasswordValidation = ({ parentCallback }) => {
  const [password, setPassword] = useState("")
  return (
    <div>
      <div className="password-field">
        <label>Password:</label>
        <input type="password" onChange={e => setPassword(e.target.value)}></input>
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
        className="Password-checklist"
        iconSize={10}
      />
    </div>
  )
}

export default PasswordValidation;
