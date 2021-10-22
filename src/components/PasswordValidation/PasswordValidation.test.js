import { render, screen } from '@testing-library/react';
import PasswordValidation from './PasswordValidation';
import React from 'react';
import ReactDOM from 'react-dom';

import '@testing-library/jest-dom';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordValidation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders password label', () => {
  render(<PasswordValidation />);
  const passwordLabel = screen.getByText(/password:/i);
  expect(passwordLabel).toBeInTheDocument();
});
