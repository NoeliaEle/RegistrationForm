import React from 'react';
import ReactDOM from 'react-dom';
import PasswordValidation from './PasswordValidation';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordValidation />, div);
  ReactDOM.unmountComponentAtNode(div);
});