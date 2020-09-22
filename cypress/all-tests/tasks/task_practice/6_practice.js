import '../../../support/commands'
import SearchResultsPage from "../../../page-object/searchResultsPage"
import AccessoriesPage from "../../../page-object/accessoriesPage"
import ProductPage from '../../../page-object/productPage';

describe('20 Практика', () => {

    let product = {};

    before(() => {
        cy.fixture('productList').then(data => {
            cy.wrap(data).as('productList');
        })
    })

    it('Task 1', () => {
        cy.get('@productList').then((productList) => {
            cy.log("GIVEN User is at Accessories Page");
            AccessoriesPage.open();

            for (let product of productList.products) {
                cy.log("WHEN User performs search product by name");
                AccessoriesPage.performSearch(product.name);

                SearchResultsPage.getProductByDocId(product.url).should('exist');

                cy.log("AND User opens Product Page for selected product");
                ProductPage.open(product.url);

                cy.log("THEN click Buy on the Product Page");
                ProductPage.clickBuy();
                
                cy.get('div.mqn-headline__title').then(($title) => {
                    if ($title.text().includes('Which size?')) {
                        cy.log("AND select size");
                        ProductPage.selectSize(product);
                    }
                }).then(() => {
                    cy.get('div.mqn-headline__title').then(($title) => {
                        if ($title.text().includes('Which color?')) {
                            cy.log("AND select color");
                            ProductPage.selectColor(product);
                        }
                    })
                })
                
                // cy.get('div.mqn-headline__title').then(($title) => {
                //     if ($title.text().includes('Which color?')) {
                //         cy.log("AND select color");
                //         ProductPage.selectColor(product);
                //     } 
                // })
            }
            
            
            cy.log("AND open cart");
            ProductPage.openCart();
            
            cy.log("THEN verify name of the product, color, quantity, price and subtotal price");
            
            ProductPage.shoppingCartList.should('have.length', '1');
            cy.fixture('productData').then(product => {
                ProductPage.price.should('have.text', product.price);
                ProductPage.subtotalPrice.should('have.text', product.price);
                ProductPage.quantity.should('have.value', '1');
                ProductPage.productName.should('have.text', `Google ${product.name} Case (${product.color})`);
            })
            
            cy.log("THEN clean the cart");
            ProductPage.cleanCart();
        })
    })

})