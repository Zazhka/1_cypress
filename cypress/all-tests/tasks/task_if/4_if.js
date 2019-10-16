import Chance from 'chance'

describe('13 Условия. Операторы if else, switch и тернарный оператор', () => {

    let age = chance.age();

    it('Task 1', () => {
        if (age <= 12) {
            cy.log(`Child(${age})`);
        } else if (age <= 18) {
            cy.log(`Teen(${age})`);
        } else if (age <= 65) {
            cy.log(`Adult(${age})`);
        } else {
            cy.log(`Senior(${age})`);
        }
    })

    it('Task 2', () => {
        switch (true) {
            case (age <= 12):
            cy.log(`Child(${age})`);
                break;
            case (age > 12 && age <= 18):
                cy.log(`Teen(${age})`);
                break;
            case (age > 18 && age <= 65):
                cy.log(`Adult(${age})`);
                break;
            default:
                cy.log(`Senior(${age})`);
        }
    })

    it('Task 3', () => {
        (age <= 12) ? cy.log(`Child(${age})`) :
        (age <= 18) ? cy.log(`Teen(${age})`) :
        (age <= 65) ? cy.log(`Adult(${age})`) :
        cy.log(`Senior(${age})`);
    })
})