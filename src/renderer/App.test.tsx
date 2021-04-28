import * as React from 'react';
import App from './App';
import { expect } from 'chai';
import { render } from '@testing-library/react';

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(document.body.contains(linkElement));
  });
});
