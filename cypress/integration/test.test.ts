it('load', () => {
	cy.visit('http://localhost:3000');
	cy.get('app-root h1').contains('Welcome to app!');
});
