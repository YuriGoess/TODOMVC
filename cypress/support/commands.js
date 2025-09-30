Cypress.Commands.add('AdicionarItens', (itens) => {

   itens.forEach((item) => {
    cy.get('[data-testid="text-input"]').type(item).type('{enter}')
  })

 })

 Cypress.Commands.add('ValidarItens', (itens) => {
  itens.forEach((item) => {
    cy.get('[data-testid="todo-item-label"]').should('contain.text', item)
  })
})

