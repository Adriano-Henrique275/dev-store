describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should be able to navigate to the oroduct page and add it to cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated prducts on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to seach for a prducts and add it to the cart', () => {
    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
