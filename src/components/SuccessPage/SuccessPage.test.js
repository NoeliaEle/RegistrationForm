import React from 'react';
import ReactDOM from 'react-dom';
import SuccessPage from './SuccessPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SuccessPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});