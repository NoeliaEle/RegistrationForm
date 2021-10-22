import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { render, screen, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom';


it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Email label', () => {
  render(<Form />);
  const emailLabel = screen.getByText(/Email:/i);
  expect(emailLabel).toBeInTheDocument();
});

test('Submit button is disabled by default', () => {
  render(<Form />);
  expect(screen.getByText('Submit')).toBeDisabled()
});

