import SearchResultsPage from './searchResultsPage' 
import Chance from 'chance'
import product from '../all-tests/tasks/task_practice/6_practice'


class ProductPage {
    
    open(docId)  {
        cy.visit(`${Cypress.env('googleURL')}/product/${docId}`);
    }

    get buyButton() {
        return cy.get('div.bar-component.price-and-button-container > div.button-wrap.pdp-bar-button-wrap > div > button');
    }

    clickBuy() {
        this.buyButton.click();
    }

    get selectMeta() {
        return cy.get('div.mqn-lobby__card__meta');
    }

    get selectButton() {
        return cy.get('div.mqn-lobby__card__buttons > div');
    }

    selectSize(product) {

        let selectorItemName = 'div.mqn-lobby__card__header > div';
        let selectorItemPrice = 'div.mqn-lobby__card__price > span';
        let selectorSelectButton = 'div.mqn-lobby__card__buttons > div';

        this.selectMeta.then(optionsList => {
            cy.wrap(chance.pickone(optionsList)).then(selectedOption => {
                
                // save item name
                cy.wrap(selectedOption).find(selectorItemName).invoke('text').then((text) => {
                    product.name = text;
                    cy.writeFile('cypress/fixtures/productData.json', product);
                })

                // save price
                cy.wrap(selectedOption).find(selectorItemPrice).invoke('text').then((text) => {
                    product.price = text.trim() + '.00';
                    cy.writeFile('cypress/fixtures/productData.json', product);
                })

                // click select button 
                cy.wrap(selectedOption).find(selectorSelectButton).click();
            })

        })

        return product;
    }

    get addToCartButton() {
        return cy.get('div.mqn-lobby-swatch__card__meta > div.mqn-lobby-swatch__card__buttons > div');
    }

    get colorMeta() {
        return cy.get('div.mqn-lobby-swatch__card__meta');
    }

    selectColor(product) {

        let selectorColorTitle = 'div.mqn-lobby__card__header > div';
        let selectorAddToCartButton = 'div.mqn-lobby-swatch__card__buttons > div';

        this.colorMeta.then(colorList => {
            cy.wrap(chance.pickone(colorList)).then(selectedColor => {

                // save item color
                cy.wrap(selectedColor).find(selectorColorTitle).invoke('text').then((text) => {
                    product.color = text;
                    cy.log(product);
                    cy.writeFile('cypress/fixtures/productData.json', product);
                })

                // click Add To Cart button
                cy.wrap(selectedColor).find(selectorAddToCartButton).click();
            })
        })

        return product;
    }

    get goToCart() {
        return cy.get('[data-default-aria-label]');
    }

    openCart() {
        this.goToCart.click();
    }

    get shoppingCartList() {
        return cy.get('div.cart-lineitem-title');
    }

    get price() {
        return cy.get('div.cart-price-bottom-padding.text-right');
    }

    get subtotalPrice() {
        return cy.get('div.price-subtotal.left-border.bottom-border.padding-bottom > div > span.float-right');
    }

    get productName() {
        return cy.get('div.cart-lineitem-title.pull-left > a > div');
    }

    get quantity() {
        return cy.get('div.item-quantity.cart-price-bottom-padding > select');
    }

    get removeButton() {
        return cy.get('button.cart-remove-button.pull-right');
    }

    cleanCart() {
        this.removeButton.click();
    }

}

export default new ProductPage()