import React, { useState, isValidElement } from 'react';
import PropTypes from 'prop-types';
import PasswordChecklist from "react-password-checklist"



const PasswordValidation = ({ typedPassword, parentCallback }) => {
  return (
    <div>
      <PasswordChecklist
        rules={["minLength", "lowercase", "capital", "number", "specialChar"]}
        minLength={8}
        value={typedPassword}
        onChange={(isValid) => { parentCallback(isValid) }}
        messages={{
          minLength: "8+ characters",
          lowercase: "lowercase letter",
          capital: "uppercase letter",
          number: "number",
          specialChar: "special character",
        }}
      />
    </div>
  )
}

PasswordValidation.propTypes = {};

PasswordValidation.defaultProps = {

};

export default PasswordValidation;
