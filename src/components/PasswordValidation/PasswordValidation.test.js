import React from 'react';
import ReactDOM from 'react-dom';
import PasswordValidation from './PasswordValidation';
import { render, screen, toBeInTheDocument } from '@testing-library/react';
import '@testing-library/jest-dom';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordValidation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders password label', () => {
  render(<Form />);
  const passwordLabel = screen.getByText(/password:/i);
  expect(passwordLabel).toBeInTheDocument();
});
