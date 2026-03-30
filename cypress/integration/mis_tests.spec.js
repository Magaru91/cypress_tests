describe('Tests de tareas', () => {

  it('crea una tarea', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('.todo-list li').should('contain', 'Tarea 1')
  })

  it('marca una tarea como completada', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('.toggle').click()

    cy.get('.todo-list li').should('have.class', 'completed')
  })

  it('desmarca una tarea', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('.toggle').click()
    cy.get('.toggle').click()

    cy.get('.todo-list li').should('not.have.class', 'completed')
  })

})it('elimina una tarea', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/')

  cy.get('.new-todo').type('Tarea 1{enter}')

  cy.get('.todo-list li').trigger('mouseover') // para que aparezca la X

  cy.get('.destroy').click()

  cy.get('.todo-list li').should('not.exist')
})
