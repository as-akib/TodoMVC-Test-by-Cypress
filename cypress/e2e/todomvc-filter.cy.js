describe('filterning', () => {

    //In the "beforeEach" we can put reuseable code.
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type('Learn Manual Testing{enter}')
        cy.get('.new-todo').type('Learn Cypress{enter}')
        cy.get('.new-todo').type('Practice Cypress{enter}')

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('filter active todos', () => {
        cy.get('.todo-list li:nth-child(1) label').should('have.text','Practice Cypress')
        cy.get('.todo-list li:nth-child(1) .toggle').should('not.be.checked')

        cy.get('.todo-list li:nth-child(3) label').should('have.text','Learn Manual Testing')
        cy.get('.todo-list li:nth-child(3) .toggle').should('not.be.checked')
    })

    it('Mark as complete', () => {
        cy.contains('Active').click()
        cy.get('.filters > :nth-child(2)').should('have.length', 1)
    })

})