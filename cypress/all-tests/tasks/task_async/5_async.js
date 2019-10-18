describe('19 Асинхронность', () => {
    
    beforeEach(() => {
        cy.request('GET', 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').its('body.products').as('productsList');
    })

    it('1. cy.request and code in one block', () => {
        cy.request('GET', 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916').its('body.products').as('products');
        cy.get('@products').then((response) => {
            cy.log(`Amount of products: ${response.length}`);
            cy.log(JSON.stringify(response[0]));
        })
    })
    
    it('2. cy.request and code in separate blocks', function () {
        cy.log(`Amount of products: ${this.productsList.length}`);
        cy.log(JSON.stringify(this.productsList[0]));
    })
})