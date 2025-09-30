
describe('Adicionar Itens', () => {

  beforeEach(() => {
    cy.visit('')
   })


  it('Adicionar um item a lista ', () => {
    const itens = ["Maça"]
    cy.AdicionarItens(itens)
    cy.ValidarItens(itens)
    cy.get('[data-testid="todo-item-toggle"]').should('exist')//Validar presença de checkbox
     
  })
})