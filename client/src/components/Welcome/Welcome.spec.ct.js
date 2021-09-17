import React from 'react';
import { mount } from '@cypress/react';
import Welcome from './Welcome';

it('renders the welcome component', () => {
  cy.intercept('GET', '**/name', {
    statusCode: 200,
    body: { 'name': 'tim' }
  })
  mount(<Welcome />);
  cy.contains('Hi')
});

it('renders the welcome component for an admin', () => {
  cy.intercept('GET', '**/name', {
    statusCode: 200,
    body: { 'name': 'admin' }
  })
  mount(<Welcome />);
  cy.contains('Welcome')
});

it('shows an error on statuscode', () => {
  cy.intercept('**name', {
    statusCode: 418
  })
  mount(<Welcome />);
  cy.contains('GET /name failed')
});
