

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
        cy.findByRole('button', {  name: /submit/i}).click();
        // click on a package
        // fill the form
        // click on submit

    })
})