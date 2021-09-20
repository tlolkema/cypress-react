# Cypress component test example

Example project, using Express, React and Cypress

## Application description
- The application consists out of 2 endpoints (/name and /frameworks)
- When /name returns 'admin' the client should display 'Welcome' instead of 'Hi'
- When /name or /frameworks fails the client should display a nice error message

## API

How to run the API:

- `cd api`
- `npm install`
- `node server.js`

## Client

How to run the React client:

- `cd client`
- `npm install`
- `npm start`

## Running tests

- `cd client`

Open E2E tests:
- `npx cypress open`

Open component tests:
- `npx cypress open-ct`
