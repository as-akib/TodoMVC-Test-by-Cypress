/*Example 1*/ 
// it('should navigate to the TodoMVC App', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh/do-not-match')
// })

/*Example 2*/ 
// it('should navigate to the TodoMVC App', () => {
//     cy.visit('http://todomvc-app-for-testing.surge.sh')

//     cy.get('.new-todo').type('New Todo{enter}')
//     // cy.get('.toggle').click()
//     cy.get('label').should('have.text','New Todo')
//     cy.get('.toggle').should('not.be.checked')

//     cy.get('.toggle').click()
//     cy.get('label').should('have.css','text-decoration-line', 'line-through')

// })

/*Example 3 (describe --> Group)*/
describe('Todo actions', () => {

    //In the "beforeEach" we can put reuseable code.
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type('New Test Todo{enter}')
    })

    it('Add new todo to the list', () => {
        cy.get('label').should('have.text','New Test Todo')
        cy.get('.toggle').should('not.be.checked')
    })

    it('Mark as complete', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css','text-decoration-line', 'line-through')
    })

    it('Clear complete todo', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
    })
})