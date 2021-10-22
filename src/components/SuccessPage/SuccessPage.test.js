import React from 'react';
import ReactDOM from 'react-dom';
import SuccessPage from './SuccessPage';

import '@testing-library/jest-dom';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SuccessPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
