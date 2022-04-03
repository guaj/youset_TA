

describe('Information form', () => {
    it('user can fill the form', () => {

        // Might have to change this if you are running the app on another port
        // runs on port 6000 by default
        cy.visit('http://localhost:3000/');
        cy.findByRole('button', { name: /umbrella insurance/i }).click(); // Select the umbrella insurance
        cy.findByRole('button', { name: /​/i }).click(); // Click on the gender select form
        cy.findByRole('option', {  name: /female/i}).click(); // Click on a gender options
        cy.findByRole('spinbutton', { name: /age/i }).type('6');
        cy.findByRole('textbox', {  name: /email/i}).type('test@gmail.com');
        cy.findByRole('button', {  name: /next/i}).click();
        cy.findByRole('button', { name: /place order/i }).click();
        cy.findByRole('button', { name: /close/i });

    })

    it('alert the user if he enters an invalid email', () => {
        cy.visit('http://localhost:3000/');
        cy.findByRole('button', { name: /umbrella insurance/i }).click();
        cy.findByRole('button', { name: /​/i }).click();
        cy.findByRole('option', {  name: /female/i}).click();
        cy.findByRole('spinbutton', { name: /age/i }).type('6');
        cy.findByRole('textbox', {  name: /email/i}).type('test'); // enter bad input
        cy.findByRole('button', {  name: /next/i}).click();
        cy.findByRole('alert', {  name: /form-error-alert/i});
    })

    it('alert the user if he enters an invalid age number', () => {
        cy.visit('http://localhost:3000/');
        cy.findByRole('button', { name: /umbrella insurance/i }).click();
        cy.findByRole('button', { name: /​/i }).click();
        cy.findByRole('option', {  name: /female/i}).click();
        cy.findByRole('spinbutton', { name: /age/i }).type('-1'); // enter bad input
        cy.findByRole('textbox', {  name: /email/i}).type('test@gmail.com');
        cy.findByRole('button', {  name: /next/i}).click();
        cy.findByRole('alert', {  name: /form-error-alert/i});
    })

    it('alert the user if he tries to submit with unfilled fields', () => {
        cy.visit('http://localhost:3000/');
        cy.findByRole('button', { name: /umbrella insurance/i }).click();
        cy.findByRole('button', { name: /​/i }).click();
        cy.findByRole('option', {  name: /female/i}).click();
        cy.findByRole('textbox', {  name: /email/i}).type('test@gmail.com'); // enter bad input
        cy.findByRole('button', {  name: /next/i}).click();
        cy.findByRole('alert', {  name: /form-error-alert/i});
    })
})