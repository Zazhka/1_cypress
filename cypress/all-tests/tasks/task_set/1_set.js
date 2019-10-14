import Chance from 'chance'
import {isSuperset, union, intersection, difference} from '../../../utils/helper'

describe('12.1 Коллекции. Работа с множествами  (Set)', () => {
    
    // Задание 1 
    let currencySet = new Set(["USD", "EUR", "BYN"]);

    it('Task 2', () => {
        // Задание 2
        currencySet.forEach(currency => {
            cy.log(currency)
        })
    })

    it('Task 3', () => {
        // Задание 3
        currencySet.add('RUB');
        currencySet.add('BYN');
        currencySet.add('GBP', 'JPY');
    
        currencySet.forEach(currency => {
            cy.log(currency)
        })
    })

    it('Task 4', () => {
        // Задание 4
        cy.log("Set has USD value: " + currencySet.has("USD"));
    
        currencySet.delete("USD");
        cy.log("Set has USD value: " + currencySet.has("USD"));
    })

    it('Task 5', () => {
        // Задание 5
        let currencyArray = Array.from(currencySet); 
        cy.log(chance.pickone(currencyArray));
        cy.log(chance.pickone(currencyArray));
        cy.log(chance.pickset(currencyArray, chance.integer({min: 1, max: currencySet.size})));
        cy.log(chance.pickset(currencyArray, chance.integer({min: 1, max: currencySet.size})));
    })

    it('Task 6', () => {
        // Задание 6
        let setA = new Set([1, 2, 3, 4]),
            setB = new Set([2, 3]),
            setC = new Set([3, 4, 5, 6]);
        
        cy.log(isSuperset(setA, setB));
        console.log(...union(setA, setC));
        cy.log(...union(setA, setC));
        cy.log(...intersection(setA, setC));
        cy.log(...difference(setA, setC));
    })
})