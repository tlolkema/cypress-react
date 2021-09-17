import React from 'react';
import { mount } from '@cypress/react';
import FrameworksTable from './FrameworksTable';

it('renders the framework table', () => {
  cy.intercept('**frameworks', {
    body: {
      "frameworks": [
          {
              "name": "playwright",
              "commits": 5260,
              "author": "Microsoft"
          }
      ]
    }
  })
  mount(<FrameworksTable />);
  cy.contains('Microsoft')
});

it('shows an error on statuscode', () => {
  cy.intercept('**frameworks', {
    statusCode: 416
  })
  mount(<FrameworksTable />);
  cy.contains('GET /frameworks failed')
});
