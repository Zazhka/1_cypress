import Chance from 'chance'

describe('12.2 Массивы данных (array)', () => {
    
    let planets = [
        {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
        {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
        {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
        {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
        {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
        {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
        {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
        {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
    ]
    
    function printPlanets(array) {
        
        array.forEach(element => {
            let output = '';
            for (let key in element) {
                output += `${key}: ${element[key]}; `;
            }
            cy.log(output);
        })
    }    
    
    
    it('Task 1', () => {
        printPlanets(planets);
    })
    
    it('Task 2', () => {
        
        let updatedPlanets = planets.map(planet => {
            planet.solarSystem = true;
            return planet;
        })
        
        printPlanets(updatedPlanets);
    })
    
    it('Task 3', () => {
        planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})
        
        printPlanets(planets);
    })
    
    it('Task 4', () => { 
        let initialValue = 0;
        let sum = planets.reduce((accumulator, currentValue) => 
        accumulator + currentValue.radius,
        initialValue
        );
        
        cy.log(sum)
    })
    
    it('Task 5', () => {
        
        function getPlanetsWithDistance(array, distance) {
            return array.filter(element => element.distance > distance);
        }
        
        cy.log("====Planets with distance > 5 ====");
        printPlanets(getPlanetsWithDistance(planets, 5));
    })
    
    it('Task 6', () => {
        let pos = planets.map(function(element) {return element.planet;}).indexOf('SomeNewPlanet');
        planets.splice(pos, 1);
        printPlanets(planets);
    })
    
    it('Task 7', () => {
        planets.sort(function(a, b) {return a.radius - b.radius});
        printPlanets(planets);
    })
    
    it('Task 8', () => {
        planets.sort(function(a, b) {
            let planetA = a.planet.toLowerCase();
            let planetB = b.planet.toLowerCase();
            if (planetA < planetB) return -1; 
            if (planetB > planetA) return 1;
            return 0;
        });
        printPlanets(planets);
    })
    
    it('Task 9', () => {
        cy.log(planets.length);
    })
    
    it('Task 10', () => {

        cy.fixture('currencyDataSet').then(currencyData => {
            let baseCurrency = currencyData.base;
            cy.log(baseCurrency);
            let convertCurrency = chance.pickone(currencyData.rates);
            cy.log(convertCurrency.shortName);
            
            cy.visit('https://www.xe.com/currencyconverter/');
            cy.get("input[id='from']").click().type(`${baseCurrency}{enter}{enter}`);
            cy.get("input[id='to']").click().type(`${convertCurrency.shortName}{enter}{enter}`);
            cy.get(".converterresult-toAmount").contains(convertCurrency.rate);
        })      

    })
})