import React from 'react';
import { mount } from '@cypress/react';
import Header from './Header';

it('renders the header component', () => {
  mount(<Header />);
});
