describe('Tela Home', () => {
  it('Verificar input da tela inicial ', () => {
    cy.visit(' ')
    cy.get('input.new-todo') 
    .should('have.attr', 'placeholder', 'What needs to be done?')
  })
})